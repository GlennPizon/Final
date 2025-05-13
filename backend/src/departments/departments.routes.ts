import { Router } from 'express';
import { DepartmentController } from './departments.controller';
import { validate } from '../middleware/validate-request';
import { authorize } from '../middleware/authorize';
import { createDepartmentSchema,updateDepartmentSchema , deleteDepartmentSchema} from './departments.schema';
import Role from '../utils/role';

const router = Router();

router.post('/', validate(createDepartmentSchema), DepartmentController.create);
router.get('/', DepartmentController.getAll);
router.get('/:id', DepartmentController.getById);
router.put('/:id',validate(updateDepartmentSchema), DepartmentController.update);
router.delete('/:id',authorize([Role.Admin]),validate(deleteDepartmentSchema), DepartmentController.delete);

export default router;
