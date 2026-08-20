import { Router } from 'express';

export const healthRouter = Router();

// Cloud Run / Azure Container Apps both poll a health endpoint to know
// when the container is ready to receive traffic and to detect crashes.
healthRouter.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});
