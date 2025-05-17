// src/departments/department.schema.ts
import Joi from 'joi';

export const createDepartmentSchema = Joi.object({
  name: Joi.string().min(1).max(100).required(),
  description: Joi.string().max(255).required() // Ensure this is marked as required
});

export const updateDepartmentSchema = Joi.object({
  name: Joi.string(),
  description: Joi.string()
});

export const deleteDepartmentSchema = Joi.object({
  id: Joi.string().required()
});


