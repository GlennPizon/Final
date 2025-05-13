// src/app.ts
import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import {initialize} from './data-source';
import { errorHandler } from './middleware/error-handler';
import swaggerRouter from './utils/swagger';

import accountRoutes from './accounts/accounts.routes';
import authRoutes from './auth/auth.routes';
import employeeRoutes from './employees/employees.routes';
import departmentRoutes from './departments/departments.routes';
import workflowRoutes from './workflows/workflows.routes';
import requestRoutes from './requests/requests.routes';

dotenv.config();

const app = express();
const PORT = parseInt(process.env.APP_PORT || '4000', 10);

// Middleware
app.use(cors({
  origin(requestOrigin, callback) {
    callback(null, requestOrigin || process.env.APP_ORIGIN);
  },
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/auth', authRoutes);
app.use('/accounts', accountRoutes);
app.use('/employees', employeeRoutes);
app.use('/departments', departmentRoutes);
app.use('/workflows', workflowRoutes);
app.use('/requests', requestRoutes);
app.use(swaggerRouter);




// 🔹 Initialize DB and Start Server
async function start() {
  
/*
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    errorHandler(err, req, res, next);
  });
*/
  await initialize();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });

  console.log("✅ Database initialized successfully.");
}

start();