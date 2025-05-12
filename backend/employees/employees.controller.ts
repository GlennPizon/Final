// src/employees/employee.controller.ts
import { Request, Response } from 'express';
import { EmployeeService } from './employees.service';
import { StatusCodes } from 'http-status-codes';

const service = new EmployeeService();

export class EmployeeController {
  static async create(req: Request, res: Response) {
    try {
      const employee = await service.create(req.body);
      res.status(StatusCodes.CREATED).json(employee);
    } catch (err: any) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: err.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    const employees = await service.getAll();
    res.json(employees);
  }

  static async getById(req: Request, res: Response) {
    try {
      const employee = await service.getById(req.params.id);
      res.json(employee);
    } catch (err: any) {
      res.status(StatusCodes.NOT_FOUND).json({ message: err.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const updated = await service.update(req.params.id, req.body);
      res.json(updated);
    } catch (err: any) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: err.message });
    }
  }

  static async _delete(req: Request, res: Response) {
    try {
      await service._delete(req.params.id);
      res.json({ message: 'Employee deleted successfully' });
    } catch (err: any) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: err.message });
    }
  }
}
