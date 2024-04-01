import {
  doublePrecision,
  pgTable,
  text,
  uuid,
  timestamp,
} from 'drizzle-orm/pg-core';

export const trainingPlan = pgTable('training_plans', {
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
  // userId: uuid('user_id').notNull(),
});
