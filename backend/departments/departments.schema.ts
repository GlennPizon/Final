// src/departments/department.schema.ts
import Joi from 'joi';

export const createDepartmentSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required()
});

export const updateDepartmentSchema = Joi.object({
  name: Joi.string(),
  description: Joi.string()
});
