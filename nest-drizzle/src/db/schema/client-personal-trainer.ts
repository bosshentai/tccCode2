import { pgTable, timestamp, uuid } from 'drizzle-orm/pg-core';

export const clientPersonalTrainer = pgTable('client_personal_trainer', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  clientId: uuid('client_id').unique().notNull(),
  personalTrainerId: uuid('personal_trainer_id').notNull(),
  createAt: timestamp('create_at', { withTimezone: true }).notNull(),
  updateAt: timestamp('update_at', { withTimezone: true }).notNull(),
});
