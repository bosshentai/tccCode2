import { pgTable, uuid } from 'drizzle-orm/pg-core';

export const client = pgTable('clients', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  userId: uuid('user_id').notNull(),
});
