import {
  doublePrecision,
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';

export const discount = pgTable('discounts', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  name: text('text').notNull(),
  description: text('text').notNull(),
  value: doublePrecision('value'),
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});
