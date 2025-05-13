// src/employees/employee.schema.ts
import Joi from 'joi';

export const createEmployeeSchema = Joi.object({
  employeeId: Joi.string().required(),
  accountId: Joi.string().uuid().required(),
  departmentId: Joi.string().uuid().required(),
  position: Joi.string().required(),
  hireDate: Joi.date().required(),
  status: Joi.string().valid('Active', 'Inactive').required()
});

export const updateEmployeeSchema = Joi.object({
  departmentId: Joi.string().uuid(),
  position: Joi.string(),
  status: Joi.string().valid('Active', 'Inactive'),
});
