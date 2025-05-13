import { Router } from 'express';
import { RequestController } from './request.controller';
import { validate } from '../middleware/validate-request';
import { createRequestSchema } from './request.schema';

const router = Router();

router.post('/', validate(createRequestSchema), RequestController.create);
router.get('/', RequestController.getAll);
router.get('/my', RequestController.getMyRequests);
router.get('/:id', RequestController.getById);
router.put('/:id', RequestController.update);
router.delete('/:id', RequestController.delete);

export default router;
