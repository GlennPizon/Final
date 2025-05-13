// src/employees/employee.routes.ts
import { Router } from 'express';
import { EmployeeController } from './employees.controller';
import { authorize } from '../middleware/authorize';
import { validate } from '../middleware/validate-request';
import { Role } from '../utils/role';
import { createEmployeeSchema, updateEmployeeSchema } from './employees.schema';

const router = Router();

router.post('/', authorize(Role.Admin), validate(createEmployeeSchema), EmployeeController.create);
router.get('/', authorize(), EmployeeController.getAll);
router.get('/:id', authorize(), EmployeeController.getById);
router.put('/:id', authorize(Role.Admin), validate(updateEmployeeSchema), EmployeeController.update);
router.delete('/:id', authorize(Role.Admin), EmployeeController._delete);
router.post('/:id/transfer', authorize(Role.Admin), EmployeeController.transfer)

export default router;
