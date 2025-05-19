﻿require('rootpath')();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const errorHandler = require('_middleware/error-handler');
const seedAdmin = require('./scripts/seed-admin');
const net = require('net');
const { initializeServer } = require('./_helpers/server');

// CORS configuration
const allowedOrigins = [
    'http://localhost:4200',  // Angular dev server
    /^https:\/\/.*\.netlify\.app$/  // All Netlify subdomains
];

app.use(cors({
    origin: function(origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        // Check if origin matches any allowed pattern
        const isAllowed = allowedOrigins.some(allowed => {
            if (allowed instanceof RegExp) {
                return allowed.test(origin);
            }
            return allowed === origin;
        });
        
        if (!isAllowed) {
            console.log('CORS blocked request from origin:', origin);
            return callback(new Error('Not allowed by CORS'), false);
        }
        
        console.log('CORS allowed request from origin:', origin);
        return callback(null, true);
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
    exposedHeaders: ['Content-Range', 'X-Content-Range'],
    maxAge: 86400 // 24 hours
}));

// Handle preflight requests
app.options('*', cors());

// Utility function to find an available port
async function getAvailablePort(startPort) {
    const maxPort = startPort + 100; // Don't search indefinitely
    
    for (let port = startPort; port < maxPort; port++) {
        try {
            await new Promise((resolve, reject) => {
                const server = net.createServer();
                server.unref();
                server.on('error', reject);
                server.listen(port, () => {
                    server.close(() => resolve(port));
                });
            });
            return port;
        } catch (err) {
            if (err.code !== 'EADDRINUSE') throw err;
            // Port is in use, try next one
            continue;
        }
    }
    throw new Error(`No available ports found between ${startPort} and ${maxPort}`);
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// API routes
app.use('/accounts', require('./accounts/accounts.controller'));
app.use('/departments', require('./departments/departments.controller'));
app.use('/employees', require('./employees/employees.controller'));
app.use('/requests', require('./requests/request.controller'));

// Serve static files from the Angular app
app.use(express.static(path.join(__dirname, '../frontend/dist/cudillo-frontend/browser')));

// Send all other requests to the Angular app
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/cudillo-frontend/browser/index.html'));
});

// Global error handler
app.use(errorHandler);

// Start the server
initializeServer().catch(error => {
    console.error('Fatal error during server initialization:', error);
    process.exit(1);
});
