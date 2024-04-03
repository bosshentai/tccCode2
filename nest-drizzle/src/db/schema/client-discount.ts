import { pgTable, uuid } from 'drizzle-orm/pg-core';

export const clientDiscount = pgTable('client_discount', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  clientId: uuid('client_id'),
});

// export const clientDiscount =  {
//   id: uuid("id")
// }
