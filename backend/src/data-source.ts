// src/data-source.ts
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import "reflect-metadata";
import mysql from 'mysql2/promise';


import { Accounts } from './accounts/accounts.entity';
import { RefreshToken } from './auth/refresh-token.entity';
import { Employees } from './employees/employees.entity';
import { Departments } from './departments/departments.entity';
import { Workflow } from './workflows/workflows.entity';
import { Requests } from './requests/request.entity';
import { RequestItem } from './requests/request-item.entity';


dotenv.config();

const connectionOptions = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: parseInt(process.env.DB_PORT || '3306'),
};

const dbname = process.env.DB_NAME;



const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [
    Accounts,
    RefreshToken,
    Employees,
    Departments,
    Workflow,
    Requests,
    RequestItem
  ],
  migrations: [],
  subscribers: []
});


// ✅ Function to Check If Database Exists
async function checkDatabaseExists(): Promise<boolean> {
    try {
        const connection = await mysql.createConnection(connectionOptions);
        const [rows]: any = await connection.query(
            `SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = ?`,
            [dbname]
        );
        return rows.length > 0;
    } catch (error) {
        console.error("Error checking database existence:", error);
        return false;
    }
}

// ✅ Function to Create Database if It Doesn't Exist
async function createDatabase() {
    try {
        const connection = await mysql.createConnection(connectionOptions);
        if (await checkDatabaseExists()) {
            console.log(`Database "${dbname}" already exists.`);
            return
        } 
        
            await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbname}\`;`);
            console.log(`Database "${dbname}" created successfully.`);
        
    } catch (error) {
        console.error("Error creating database:", error);
    }
}

// ✅ Initialize Database & TypeORM
export const initialize = async () => {
    try {
        await createDatabase(); // 🔹 Ensure DB is created before TypeORM starts
        await AppDataSource.initialize();
        console.log("Data Source has been initialized successfully!");
    } catch (error) {
        console.error("Error initializing database:", error);
    }
};

export default initialize;