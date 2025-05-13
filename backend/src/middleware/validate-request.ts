// src/middleware/validate-request.ts
import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export function validate(schema: Joi.ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const options = {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: true,
    };

    const { error, value } = schema.validate(req.body, options);

    if (error) {
      res.status(400).json({
        message: 'Validation failed',
        errors: error.details.map((err) => ({
          field: err.path.join('.'),
          message: err.message.replace(/"/g, ''),
        })),
      });
      return; // <== Important: ensure the function ends
    }

    req.body = value;
    next(); // Let the request continue
  };
}
