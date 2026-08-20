import { PrismaClient } from '@prisma/client';

// A single shared instance avoids exhausting the Postgres connection pool
// when running under a hot-reloading dev server.
export const prisma = new PrismaClient();
