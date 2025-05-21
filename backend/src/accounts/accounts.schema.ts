// src/accounts/account.schema.ts
import Joi from 'joi';

export const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.ref('password'),
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  title: Joi.string().required(),
  acceptTerms: Joi.boolean().valid(true).required(),
  role: Joi.string().valid('Admin', 'User').optional(),// Only Admin should be allowed to send this
  status: Joi.string().valid('Active', 'Inactive').optional()
});

export const authenticateSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

export const verifyEmailSchema = Joi.object({
  token: Joi.string().required()
});

export const forgotPasswordSchema = Joi.object({
  email: Joi.string().email().required()
});

export const validateResetTokenSchema = Joi.object({
  token: Joi.string().required()
});

export const resetPasswordSchema = Joi.object({
  token: Joi.string().required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.ref('password')
});

export const createAccountSchema = registerSchema;

export const updateAccountSchema = Joi.object({
  title: Joi.string().optional(),
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
  email: Joi.string().email().optional(),
  password: Joi.string().min(6).optional(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).optional(),
  role: Joi.string().valid('Admin', 'User').optional(), // Only Admin should be allowed to send this
  acceptTerms: Joi.boolean().optional(),
  status: Joi.string().valid('Active', 'Inactive').optional()
});


export const deleteAccountSchema = Joi.object({
  id: Joi.string().required()
});

