import { Router } from 'express';

export const webhooksRouter = Router();

/**
 * IMPORTANT — read before implementing either of these routes for real:
 *
 * 1. NEVER trust a payment confirmation that comes from the browser/frontend.
 *    Only trust the provider calling this webhook directly, server-to-server.
 *
 * 2. Verify the webhook signature (FedaPay and KkiaPay both sign their
 *    webhook payloads with a secret you configure in their dashboard).
 *    This requires access to the RAW request body — express.json() must be
 *    skipped for this route (or configured with a verify() callback that
 *    stashes the raw buffer) or signature verification will silently fail.
 *
 * 3. Treat this handler as idempotent. Providers retry webhooks on timeout,
 *    so the same event may arrive more than once — check
 *    providerTransactionId against Payment.providerTransactionId (unique
 *    in the schema) before applying any state change.
 *
 * 4. Respond fast (2xx) once you've durably recorded the event. Do slow
 *    work (sending a receipt email, etc.) in a background job, not inline
 *    here — a slow webhook handler causes the provider to retry
 *    unnecessarily and can cascade into duplicate processing.
 */

webhooksRouter.post('/webhooks/fedapay', (_req, res) => {
  res.status(501).json({ error: 'Not implemented yet — see comments in webhooks.ts before building this.' });
});

webhooksRouter.post('/webhooks/kkiapay', (_req, res) => {
  res.status(501).json({ error: 'Not implemented yet — see comments in webhooks.ts before building this.' });
});
