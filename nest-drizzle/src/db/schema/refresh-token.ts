import { pgTable, timestamp, uuid } from 'drizzle-orm/pg-core';

export const refreshToken = pgTable('refresh_tokens', {
  id: uuid('id').primaryKey(),
  expiresIn: timestamp('expires_in', { withTimezone: true }).notNull(),
  userId: uuid('user_id').unique().notNull(),
});
