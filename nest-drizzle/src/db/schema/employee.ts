import { pgTable, timestamp, uuid } from 'drizzle-orm/pg-core';

export const employee = pgTable('employees', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  userId: uuid('user_id').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }),
  updatedAt: timestamp('updated_at', { withTimezone: true }),
});
