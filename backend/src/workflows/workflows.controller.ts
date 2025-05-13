// src/workflows/workflow.controller.ts
import { Request, Response } from 'express';
import { WorkflowService } from './workflows.service';
import { StatusCodes } from 'http-status-codes';

const workflowService = new WorkflowService();

export class WorkflowController {
  static async create(req: Request, res: Response) {
    try {
      const result = await workflowService.create(req.body);
      res.status(StatusCodes.CREATED).json(result);
    } catch (err: any) {
      res.status(StatusCodes.BAD_REQUEST).json({ error: err.message });
    }
  }

  static async findByEmployeeId(req: Request, res: Response) {
    try {
      const { employeeId } = req.params;
      const result = await workflowService.findByEmployeeId(employeeId);
      res.status(StatusCodes.OK).json(result);
    } catch (err: any) {
      res.status(StatusCodes.BAD_REQUEST).json({ error: err.message });
    }
  }

  static async onboarding(req: Request, res: Response) {
    try {
      const result = await workflowService.onboard(req.body);
      res.status(StatusCodes.CREATED).json(result);
    } catch (err: any) {
      res.status(StatusCodes.BAD_REQUEST).json({ error: err.message });
    }
  }

  static async updateStatus(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const result = await workflowService.updateStatus(id, status);
      res.status(StatusCodes.OK).json(result);
    } catch (err: any) {
      res.status(StatusCodes.BAD_REQUEST).json({ error: err.message });
    }
  }
}