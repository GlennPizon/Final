// src/middleware/validate-request.ts
import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export function validate(schema: Joi.ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const options = {
      abortEarly: false, // return all errors
      allowUnknown: true, // allow unknown props
      stripUnknown: true, // remove unknown props
    };

    const { error, value } = schema.validate(req.body, options);
    if (error) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: error.details.map((err) => ({
          field: err.path.join('.'),
          message: err.message.replace(/"/g, ''),
        })),
      });
    }

    req.body = value;
    next();
  };
}
