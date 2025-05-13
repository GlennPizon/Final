// src/auth/auth.routes.ts
import { Router } from 'express';
import { AuthController } from './auth.controller';
import { validate } from '../middleware/validate-request';
import Joi from 'joi';

const router = Router();

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

const refreshSchema = Joi.object({
  token: Joi.string().required()
});

const revokeSchema = Joi.object({
  token: Joi.string().required()
});

const logoutSchema = Joi.object({
  token: Joi.string().required()
});

//auth routes

router.post('/login', validate(loginSchema), AuthController.login);
router.post('/refresh-token', validate(refreshSchema), AuthController.refresh);
router.post('/revoke-token', validate(revokeSchema), AuthController.revoke);
router.post('/logout', AuthController.logout); // Logout user

export default router;
