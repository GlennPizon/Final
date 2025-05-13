// src/workflows/workflow.routes.ts
import { Router } from 'express';
import { WorkflowController } from './workflows.controller';
import { authorize } from '../middleware/authorize';
import { validate } from '../middleware/validate-request';
import { createWorkflowSchema, updateWorkflowStatusSchema } from './workflows.schema';

const router = Router();

router.post('/workflows', authorize(Role.Admin), validate(createWorkflowSchema), WorkflowController.create);
router.get('/workflows/employee/:employeeId', authorize(), WorkflowController.findByEmployeeId);
router.post('/workflows/onboarding', authorize(Role.Admin), WorkflowController.onboarding)
router.put('/workflows/:id/status', authorize(Role.Admin), validate(updateWorkflowStatusSchema), WorkflowController.updateStatus);

export default router;
