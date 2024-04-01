import { pgEnum } from 'drizzle-orm/pg-core';

export const role = pgEnum('roles', [
  'MANAGER',
  'EMPLOYEE',
  'CLIENT',
  'PERSONALTRAINER',
  'UNKNOWN',
]);
