import { Router } from 'express';
import { DepartmentController } from './departments.controller';
import { validate } from '../middleware/validate-request';
import { createDepartmentSchema,updateDepartmentSchema } from './departments.schema';

const router = Router();

router.post('/', validate(createDepartmentSchema), DepartmentController.create);
router.get('/', DepartmentController.getAll);
router.get('/:id', DepartmentController.getById);
router.put('/:id',validate(updateDepartmentSchema), DepartmentController.update);
router.delete('/:id', DepartmentController.delete);

export default router;
