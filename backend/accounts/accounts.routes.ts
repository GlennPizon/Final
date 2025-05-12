import { Router } from 'express';
import { AccountController } from './accounts.controller';
import { validate } from '../middleware/validate-request';
import { registerSchema } from './accounts.schema';

const router = Router();

router.post('/register', validate(registerSchema), AccountController.register);
router.post('/verify-email', AccountController.verifyEmail); // Email verification
router.post('/authenticate', AccountController.authenticate); // Authenticate user
router.post('/refresh-token', AccountController.refreshToken); // Refresh JWT token
router.post('/revoke-token', AccountController.revokeToken); // Revoke refresh token
router.get('/', AccountController.getAllAccounts); // Get all accounts
router.get('/:id', AccountController.getAccountById); // Get single account
router.put('/:id', AccountController.updateAccount); // Update account
router.delete('/:id', AccountController.deleteAccount); // Delete account

export default router;
