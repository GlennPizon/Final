// src/types/request-with-user.ts
import { Request } from 'express';
import { JwtPayload } from './jwt-payload';

export interface RequestWithUser extends Request {
  user?: JwtPayload;
}
