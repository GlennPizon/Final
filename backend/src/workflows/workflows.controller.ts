// src/workflows/workflows.controller.ts
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
      res.status(StatusCodes.BAD_REQUEST).json({ message: err.message });
    }
  }

  static async findByEmployeeId(req: Request, res: Response) {
    try {
      const result = await workflowService.findByEmployeeId(req.params.employeeId);
      res.json(result);
    } catch (err: any) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: err.message });
    }
  }

  static async onboarding(req: Request, res: Response) {
    try {
      const result = await workflowService.onboarding(req.body);
      res.status(StatusCodes.CREATED).json(result);
    } catch (err: any) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: err.message });
    }
  }

  static async updateStatus(req: Request, res: Response) {
    try {
      const result = await workflowService.updateStatus(req.params.id, req.body.status);
      res.json(result);
    } catch (err: any) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: err.message });
    }
  }
}