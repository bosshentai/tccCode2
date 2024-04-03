import { pgTable, timestamp, uuid } from 'drizzle-orm/pg-core';

export const clientTrainingPlan = pgTable('client_training_plan', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  clientId: uuid('client_id').notNull(),
  trainingPlanId: uuid('training_plan_id').notNull(),
  createAt: timestamp('created_at', { withTimezone: true }).notNull(),
  updateAt: timestamp('updated_at', { withTimezone: true }).notNull(),
});
