// src/requests/request.controller.ts
import { Request, Response } from 'express';
import { RequestService } from './request.service';
import { StatusCodes } from 'http-status-codes';

const requestService = new RequestService();

export class RequestController {
  static async create(req: Request, res: Response) {
    try {
      const result = await requestService.create(req.body);
      res.status(StatusCodes.CREATED).json(result);
    } catch (err: any) {
      res.status(StatusCodes.BAD_REQUEST).json({ error: err.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const result = await requestService.getAll();
      res.status(StatusCodes.OK).json(result);
    } catch (err: any) {
      res.status(StatusCodes.BAD_REQUEST).json({ error: err.message });
    }
  }

  static async getMyRequests(req: Request, res: Response) {
    try {
      const userId = req.user?.id;
      const result = await requestService.getMyRequests(userId);
      res.status(StatusCodes.OK).json(result);
    } catch (err: any) {
      res.status(StatusCodes.BAD_REQUEST).json({ error: err.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await requestService.getById(id);
      res.status(StatusCodes.OK).json(result);
    } catch (err: any) {
      res.status(StatusCodes.NOT_FOUND).json({ error: err.message });
    }
  }

  static async getByEmployeeId(req: Request, res: Response) {
    try {
      const { employeeId } = req.params;
      const result = await requestService.getByEmployeeId(employeeId);
      res.status(StatusCodes.OK).json(result);
    } catch (err: any) {
      res.status(StatusCodes.BAD_REQUEST).json({ error: err.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await requestService.update(id, req.body);
      res.status(StatusCodes.OK).json(result);
    } catch (err: any) {
      res.status(StatusCodes.BAD_REQUEST).json({ error: err.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await requestService.delete(id);
      res.status(StatusCodes.OK).json({ message: 'Request deleted successfully' });
    } catch (err: any) {
      res.status(StatusCodes.BAD_REQUEST).json({ error: err.message });
    }
  }
}
