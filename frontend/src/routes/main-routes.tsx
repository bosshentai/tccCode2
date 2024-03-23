import { AuthGuard } from '@/utils/route-guard/AuthGuard';
import { lazy } from 'react';

/**
 * todo: wip
 */

export const MainRoutes = {
  path: '/',
  element: (
    <AuthGuard>
      <>Testing</>
    </AuthGuard>
  ),
};
