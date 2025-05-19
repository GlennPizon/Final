﻿require('rootpath')();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const errorHandler = require('_middleware/error-handler');
const seedAdmin = require('./scripts/seed-admin');
const net = require('net');

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

async function initializeServer() {
    try {
        // Get base port from environment or default
        const basePort = parseInt(process.env.PORT || '4000', 10);
        
        // Try to get an available port
        let port;
        try {
            port = await getAvailablePort(basePort);
            if (port !== basePort) {
                console.log(`Port ${basePort} is in use, using port ${port} instead`);
            }
        } catch (error) {
            console.error(`Port ${basePort} is in use. Please stop the existing server or use a different port.`);
            throw error;
        }

        // Start the server with the available port
        const server = app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });

        // Handle server errors
        server.on('error', (error) => {
            if (error.code === 'EADDRINUSE') {
                console.error(`Port ${port} is already in use. Please try a different port.`);
                process.exit(1);
            } else {
                console.error('Server error:', error);
                throw error;
            }
        });

        // Initialize database
        console.log('Waiting for database initialization...');
        const db = require('_helpers/db');
        
        // Wait for database to be ready
        let retries = 0;
        const maxRetries = 5;
        
        while (retries < maxRetries) {
            try {
                await db.sequelize.authenticate();
                console.log('Database connection authenticated successfully');

                // Wait for tables to be created
                await new Promise(resolve => setTimeout(resolve, 2000));

                // Attempt to seed admin account
                console.log('Attempting to seed admin account...');
                await seedAdmin(db);
                console.log('Admin account seeded successfully');
                break;
            } catch (error) {
                retries++;
                if (retries === maxRetries) {
                    throw new Error(`Failed to initialize database after ${maxRetries} attempts: ${error.message}`);
                }
                console.log(`Retrying database initialization (attempt ${retries}/${maxRetries})...`);
                await new Promise(resolve => setTimeout(resolve, 2000));
            }
        }

        console.log('Server initialization completed successfully');
        return { server, db };
    } catch (error) {
        console.error('Error during server initialization:', error);
        throw error;
    }
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// allow cors requests from any origin and with credentials
app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }));

// api routes
app.use('/accounts', require('./accounts/accounts.controller'));
app.use('/departments', require('./departments/departments.controller'));
app.use('/employees', require('./employees/employees.controller'));
app.use('/requests', require('./requests/request.controller'));

// swagger docs route
app.use('/api-docs', require('_helpers/swagger'));

// global error handler
app.use(errorHandler);

// Initialize server and database
initializeServer().catch(error => {
    console.error('Fatal error during server initialization:', error);
    process.exit(1);
});