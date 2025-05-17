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

  static async transfer(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { newDepartmentId } = req.body;

      const result = await service.transfer(id, newDepartmentId);
      res.status(StatusCodes.OK).json({ message: "Employee transferred successfully", data: result });
    } catch (err: any) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: err.message });
      }
  }




}


/*


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

*/
