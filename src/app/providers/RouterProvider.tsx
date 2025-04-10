import {
  RouterProvider as TanstackRouter,
  createRouter,
} from '@tanstack/react-router';

import { routeTree } from '@/routeTree.gen';
import { useAuth } from '@/hooks/useAuth';
import { UiLoader } from '@/components';

const router = createRouter({ routeTree, context: { user: null } });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const RouterProvider = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <UiLoader fullscreen />;

  return <TanstackRouter router={router} context={{ user }} />;
};
