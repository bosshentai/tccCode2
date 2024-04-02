import { pgTable, timestamp, uuid } from 'drizzle-orm/pg-core';

export const manager = pgTable('managers', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  // userId: uuid('user_id').notNull(),
  createAt: timestamp('created_at', { withTimezone: true }).notNull(),
  updateAt: timestamp('updated_at', { withTimezone: true }).notNull(),
});
