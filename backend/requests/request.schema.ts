// src/requests/request.schema.ts
import Joi from 'joi';

export const createRequestSchema = Joi.object({
  employeeId: Joi.string().uuid().required(),
  type: Joi.string().required(),
  items: Joi.array().items(
    Joi.object({
      name: Joi.string().required(),
      quantity: Joi.number().integer().min(1).required()
    })
  ).min(1).required()
});

export const updateRequestSchema = Joi.object({
  type: Joi.string(),
  status: Joi.string().valid('Pending', 'Approved', 'Rejected'),
  items: Joi.array().items(
    Joi.object({
      name: Joi.string().required(),
      quantity: Joi.number().integer().min(1).required()
    })
  )
});
