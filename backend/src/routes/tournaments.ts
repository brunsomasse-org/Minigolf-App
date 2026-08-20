import { Router } from 'express';

export const tournamentsRouter = Router();

// TODO once tournament fee integration is scoped:
//   GET  /tournaments                       - list upcoming tournaments + entry fee
//   POST /tournaments/:id/register          - create TournamentRegistration + Payment intent
tournamentsRouter.post('/tournaments/:id/register', (_req, res) => {
  res.status(501).json({ error: 'Not implemented yet — tournament fee payments are still in planning.' });
});
