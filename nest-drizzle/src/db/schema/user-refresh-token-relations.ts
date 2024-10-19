import { relations } from 'drizzle-orm';
import { refreshToken } from './refresh-token';
import { user } from './user';

export const userRefreshTokenRelations = relations(refreshToken, ({ one }) => ({
  token: one(user, {
    fields: [refreshToken.userId],
    references: [user.id],
  }),
}));
