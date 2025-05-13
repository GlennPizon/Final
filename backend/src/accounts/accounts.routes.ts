import { Router } from 'express';
import { AccountController } from './accounts.controller';
import { validate } from '../middleware/validate-request';
import { registerSchema, authenticateSchema, verifyEmailSchema, forgotPasswordSchema, validateResetTokenSchema, resetPasswordSchema , updateAccountSchema} from './accounts.schema';
import { authorize } from '../middleware/authorize';
import { Role } from '../utils/role';

const router = Router();

router.post('/register', validate(registerSchema), AccountController.register);
router.post('/verify-email', validate(verifyEmailSchema), AccountController.verifyEmail); // Email verification
router.post('/authenticate', validate(authenticateSchema),AccountController.authenticate); // Authenticate user
router.post('/forgot-password',validate(forgotPasswordSchema), AccountController.forgotPassword); // Forgot password
router.post('/validate-reset-token', validate(validateResetTokenSchema),AccountController.validateResetToken); // Validate reset token
router.post('/reset-password', validate(resetPasswordSchema),AccountController.resetPassword)
router.post('/refresh-token', AccountController.refreshToken); // Refresh JWT token
router.post('/revoke-token', authorize(),AccountController.revokeToken); // Revoke refresh token
router.get('/', authorize([Role.Admin]),AccountController.getAllAccounts); // Get all accounts
router.get('/:id',authorize() , AccountController.getAccountById); // Get single account
router.put('/:id', authorize([Role.Admin, Role.User]), validate(updateAccountSchema),AccountController.updateAccount); // Update account
router.delete('/:id', authorize([Role.Admin]),AccountController.deleteAccount); // Delete account

export default router;
