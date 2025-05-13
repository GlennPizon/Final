// src/utils/swagger.ts
import swaggerUi from 'swagger-ui-express';
import { Router } from 'express';

const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'IPT Final 2025 API',
    version: '1.0.0',
    description: 'API documentation for the backend'
  },
  paths: {} // Fill this as needed
};

const router = Router();
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;
