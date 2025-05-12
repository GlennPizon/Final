// src/data-source.ts
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
dotenv.config();

import { Accounts } from './accounts/accounts.entity';
import { RefreshToken } from './auth/refresh-token.entity';
import { Employees } from './employees/employees.entity';
import { Departments } from './departments/departments.entity';
import { Workflows } from './workflows/workflows.entity';
import { Requests } from './requests/request.entity';
import { RequestItem } from './requests/request-item.entity';

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
