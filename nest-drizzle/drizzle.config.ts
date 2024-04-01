import type { Config } from 'drizzle-kit';

import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

// console.log(process.env.DATABASE_URL);

export default {
  schema: './src/db/_index.ts',
  out: './drizzle',
  driver: 'pg', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
} satisfies Config;
