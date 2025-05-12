// src/accounts/account.controller.ts
import { Request, Response } from 'express';
import { AccountService } from './accounts.service';
import { StatusCodes } from 'http-status-codes';

const service = new AccountService();

export class AccountController {
  static async register(req: Request, res: Response) {
    try {
      const result = await service.register(req.body, req.headers.origin || '');
      res.status(StatusCodes.CREATED).json(result);
    } catch (err: any) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: err.message });
    }
  }

  static async verifyEmail(req: Request, res: Response) {
    try {
      const { token } = req.query;
      const result = await service.verifyEmail(token as string);
      res.status(StatusCodes.OK).json(result);
    } catch (err: any) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: err.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    const result = await service.getAll();
    res.json(result);
  }

  static async getById(req: Request, res: Response) {
    try {
      const result = await service.getById(req.params.id);
      res.json(result);
    } catch (err: any) {
      res.status(StatusCodes.NOT_FOUND).json({ message: err.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const result = await service.update(req.params.id, req.body);
      res.json(result);
    } catch (err: any) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: err.message });
    }
  }

  static async _delete(req: Request, res: Response) {
    try {
      await service._delete(req.params.id);
      res.json({ message: 'Account deleted' });
    } catch (err: any) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: err.message });
    }
  }
}
