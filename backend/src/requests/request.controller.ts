import { Request, Response } from 'express';
import { RequestService } from './request.service';
import { StatusCodes } from 'http-status-codes';

const requestService = new RequestService();

export class RequestController {
  static async create(req: Request, res: Response) {
    const { employeeId, type, items } = req.body;
    const result = await requestService.create({ employeeId, type, items });
    res.status(StatusCodes.CREATED).json(result);
  }

  static async getAll(req: Request, res: Response) {
    const requests = await requestService.getAll();
    res.status(StatusCodes.OK).json(requests);
  }

  static async getMyRequests(req: Request, res: Response) {
    const employeeId = req.user?.id;
    const requests = await requestService.getRequestsByEmployee(employeeId);
    res.status(StatusCodes.OK).json(requests);
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;
    const request = await requestService.getById(id);
    res.status(StatusCodes.OK).json(request);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const updatedRequest = await requestService.update(id, req.body
