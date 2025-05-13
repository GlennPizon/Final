// src/accounts/account.schema.ts
import Joi from 'joi';

export const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.ref('password'),
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  title: Joi.string().required(),
  acceptTerms: Joi.boolean().valid(true).required()
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

  title: Joi.string().empty(''),
  firstName: Joi.string().empty(''),
  lastName: Joi.string().empty(''),
  email: Joi.string().email().empty(''),
  password: Joi.string().min(6).empty(''),
  confirmPassword: Joi.string().valid(Joi.ref('password')).empty(''),
  role: Joi.string().valid('User','Admin').forbidden()
});

export const deleteAccountSchema = Joi.object({
  id: Joi.string().required()
});

