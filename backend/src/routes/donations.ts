import { Router } from 'express';

export const donationsRouter = Router();

// TODO once donation integration is scoped:
//   POST /donations - create a Payment (purpose: DONATION), no Member required
donationsRouter.post('/donations', (_req, res) => {
  res.status(501).json({ error: 'Not implemented yet — donations are still in planning.' });
});
