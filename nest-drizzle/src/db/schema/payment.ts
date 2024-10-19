import {
  doublePrecision,
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';

export const payment = pgTable('payments', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  clientId: uuid('client_id').notNull(),
  trainingPlanName: text('training_plan_name').notNull(),
  trainingPlanValue: doublePrecision('training_plan_value').notNull(),
  discountName: text('discount_name').notNull(),
  discountValue: doublePrecision('discount_value').notNull(),
  createAt: timestamp('created_at', { withTimezone: true }).notNull(),
  updateAt: timestamp('updated_at', { withTimezone: true }).notNull(),
});
