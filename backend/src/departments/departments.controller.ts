import { Request, Response } from 'express';
import { DepartmentService } from './departments.service';
import { StatusCodes } from 'http-status-codes';

const departmentService = new DepartmentService();

export class DepartmentController {
  static async create(req: Request, res: Response) {
    const { name, description } = req.body;
    const result = await departmentService.create({ name, description });
    res.status(StatusCodes.CREATED).json(result);
  }

  static async getAll(req: Request, res: Response) {
    const departments = await departmentService.getAll();
    res.status(StatusCodes.OK).json(departments);
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;
    const department = await departmentService.getById(id);
    res.status(StatusCodes.OK).json(department);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const updatedDepartment = await departmentService.update(id, req.body);
    res.status(StatusCodes.OK).json(updatedDepartment);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    await departmentService.delete(id);
    res.status(StatusCodes.NO_CONTENT).send();
  }
}
