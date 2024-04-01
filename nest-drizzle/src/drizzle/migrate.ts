import 'dotenv/config';
import postgres from 'postgres';
import { drizzle as migratorDrizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import * as schema from '../db/_index';
const migrationsClient = postgres(process.env.DATABASE_URL);

const db = migratorDrizzle(migrationsClient, { schema });
(async () => {
  await migrate(db, { migrationsFolder: 'drizzle' });
  await migrationsClient.end();
})();
