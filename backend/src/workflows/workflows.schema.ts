// src/workflows/workflow.schema.ts
import Joi from 'joi';

export const createWorkflowSchema = Joi.object({
  employeeId: Joi.string().uuid().required(),
  type: Joi.string().valid('Transfer', 'Onboarding').required(),
  details: Joi.string().required()
});

export const updateWorkflowStatusSchema = Joi.object({
  status: Joi.string().valid('Pending', 'Approved', 'Rejected').required()
});
