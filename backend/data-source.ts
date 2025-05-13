// src/data-source.ts
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
dotenv.config();

import { Accounts } from './src/accounts/accounts.entity';
import { RefreshToken } from './src/auth/refresh-token.entity';
import { Employees } from './src/employees/employees.entity';
import { Departments } from './src/departments/departments.entity';
import { Workflows } from './src/workflows/workflows.entity';
import { Requests } from './src/requests/request.entity';
import { RequestItem } from './src/requests/request-item.entity';

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
    Workflows,
    Requests,
    RequestItem
  ],
  migrations: [],
  subscribers: []
});

export default async function initialize() {
  await AppDataSource.initialize();
  console.log('✅ Database connected');
}

export { AppDataSource };
