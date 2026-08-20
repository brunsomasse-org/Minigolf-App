import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { healthRouter } from './routes/health.js';
import { membershipRouter } from './routes/membership.js';
import { tournamentsRouter } from './routes/tournaments.js';
import { donationsRouter } from './routes/donations.js';
import { webhooksRouter } from './routes/webhooks.js';

const app = express();
const port = process.env.PORT ?? 8080;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(healthRouter);
app.use('/api', membershipRouter);
app.use('/api', tournamentsRouter);
app.use('/api', donationsRouter);
app.use(webhooksRouter);

app.listen(port, () => {
  console.log(`UMB backend listening on port ${port}`);
});
