import {
  RouterProvider as TanstackRouter,
  createRouter,
} from '@tanstack/react-router';

import { routeTree } from '@/routeTree.gen';

import { useAuth } from './AuthProvider';

const router = createRouter({ routeTree, context: { user: null } });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const RouterProvider = () => {
  const user = useAuth();

  return <TanstackRouter router={router} context={{ user: user ?? null }} />;
};
