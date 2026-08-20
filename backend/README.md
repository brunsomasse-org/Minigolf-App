# UMB Backend (planning scaffold — not live)

Express + TypeScript + Prisma/Postgres API for the future payment
integration: membership fees, tournament fees, and donations. This is a
skeleton, not a working payment system — every route beyond `/health`
returns `501 Not Implemented` on purpose, so nothing here can be
accidentally wired to real money before it's actually built out.

## Status
- [x] Project scaffold, Dockerfile, local docker-compose
- [x] Draft Prisma schema (Member, Tournament, TournamentRegistration, Payment)
- [ ] Payment provider chosen (leading candidates: FedaPay, KkiaPay — both
      Beninese, both cover MTN Mobile Money + Moov Money + cards)
- [ ] Hosted-checkout integration (redirect flow, so this app never
      touches card numbers or mobile money PINs directly)
- [ ] Webhook signature verification — see the comments in
      `src/routes/webhooks.ts` before implementing this; it's the part
      most likely to be gotten wrong
- [ ] Membership signup flow
- [ ] Tournament registration + fee flow
- [ ] Donation flow
- [ ] Deploy target: Cloud Run or Azure Container Apps (Dockerfile is
      ready for either)
- [ ] Managed Postgres provisioned (Cloud SQL / Azure Database for
      PostgreSQL) — do not run the docker-compose `db` service in
      production

## Local development
```bash
cp .env.example .env
docker compose up
```
API available at `http://localhost:8080`, Postgres at `localhost:5432`.

## Running migrations
```bash
cd backend
npm run prisma:migrate
```

## Deploying (once this is ready to go live)
Build and push the image, then deploy to whichever platform you're
targeting:
```bash
docker build -t <registry>/umb-backend:latest ./backend
docker push <registry>/umb-backend:latest
```
- **Cloud Run**: `gcloud run deploy umb-backend --image <registry>/umb-backend:latest --port 8080`
- **Azure Container Apps**: `az containerapp create --image <registry>/umb-backend:latest --target-port 8080 ...`

Either way, set `DATABASE_URL` and the payment provider secrets via
Secret Manager / Key Vault — never bake them into the image or commit
them to `.env`.
