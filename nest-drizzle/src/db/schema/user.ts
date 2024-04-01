// import { sql } from 'drizzle-orm';
import { uuid, pgTable, varchar, timestamp } from 'drizzle-orm/pg-core';

export const user = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  password: varchar('password', { length: 255 }).notNull(),
  birth: timestamp('birth_date', { withTimezone: true }).notNull(),
  cni: varchar('cni').notNull(),
  nif: varchar('nif').notNull(),
});
