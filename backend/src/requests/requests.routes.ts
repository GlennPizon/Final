import { Router } from 'express';
import { RequestController } from './request.controller';
import { validate } from '../middleware/validate-request';
import { createRequestSchema } from './request.schema';
import { authorize } from '../middleware/authorize';
import Role from '../utils/role';

const router = Router();

router.post('/',authorize(), validate(createRequestSchema), RequestController.create);
router.get('/',authorize(Role.Admin), RequestController.getAll);
router.get('/my', authorize(), RequestController.getMyRequests);
router.get('/:id',authorize(), RequestController.getById);
router.get('/employee/:employeeId',authorize(), RequestController.getByEmployeeId)
router.put('/:id',authorize(Role.Admin), RequestController.update);
router.delete('/:id',authorize(Role.Admin),RequestController.delete);

export default router;
