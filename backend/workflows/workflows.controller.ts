import { Request, Response } from 'express';
import { WorkflowService } from './workflows.service';
import { StatusCodes } from 'http-status-codes';

const workflowService = new WorkflowService();

export class WorkflowController {
  static async create(req: Request, res: Response) {
    const { employeeId, type, details } = req.body;
    const result = await workflowService.create({ employeeId, type, details });
    res.status(StatusCodes.CREATED).json(result);
  }

  static async getAll(req: Request, res: Response) {
    const workflows = await workflowService.getAll();
    res.status(StatusCodes.OK).json(workflows);
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;
    const workflow = await workflowService.getById(id);
    res.status(StatusCodes.OK).json(workflow);
  }

  static async updateStatus(req: Request, res: Response) {
    const { id } = req.params;
    const { status } = req.body;
    const result = await workflowService.updateStatus(id, status);
    res.status(StatusCodes.OK).json(result);
  }
}
