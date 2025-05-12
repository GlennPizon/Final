// src/accounts/account.routes.ts
import { Router } from 'express';
import { AccountController } from './accounts.controller';
import { authorize } from '../middleware/authorize';
import { Role } from '../utils/role';
import { validate } from '../middleware/validate-request';
import {
  registerSchema,
  updateAccountSchema
} from './account.schema'; // optional if you keep validation here

const router = Router();

// Public routes
router.post('/register', validate(registerSchema), AccountController.register);
router.get('/verify-email', AccountController.verifyEmail);

// Protected routes
router.get('/', authorize(Role.Admin), AccountController.getAll);
router.get('/:id', authorize(), AccountController.getById);
router.put('/:id', authorize(), validate(updateAccountSchema), AccountController.update);
router.delete('/:id', authorize(Role.Admin), AccountController._delete);

export default router;
