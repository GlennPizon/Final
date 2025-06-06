import { Request, Response } from 'express';
import { DepartmentService } from './departments.service';
import { StatusCodes } from 'http-status-codes';

const departmentService = new DepartmentService();

export class DepartmentController {
  static async create(req: Request, res: Response) {
    const { name, description } = req.body;
    const newDepartment = await departmentService.create({name, description});
    if (!newDepartment) {
      res.status(StatusCodes.BAD_REQUEST).send();
    }
    res.status(StatusCodes.CREATED).json(newDepartment);
  }

  static async getAll(req: Request, res: Response) {
    const departments = await departmentService.getAll();
    res.status(StatusCodes.OK).json(departments);
  }

  static async getById(req: Request, res: Response) {
    const  id  = req.params.id;
    const department = await departmentService.getById(id);
    res.status(StatusCodes.OK).json(department);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const updatedDepartment = await departmentService.update(id, req.body);
    res.status(StatusCodes.OK).json(updatedDepartment);
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await departmentService.delete(id)
      res.status(StatusCodes.OK).send({msg: `Account Deleted Successfully`});
    } catch (err) {
      res.status(StatusCodes.BAD_REQUEST).send();
    }
  }
}
