import { Router } from 'express';

export const membershipRouter = Router();

// TODO once membership fee integration is scoped:
//   POST /membership/signup     - create a Member (status: PENDING) + Payment intent
//   GET  /membership/:id/status - check payment/member status
membershipRouter.post('/membership/signup', (_req, res) => {
  res.status(501).json({ error: 'Not implemented yet — membership payments are still in planning.' });
});
