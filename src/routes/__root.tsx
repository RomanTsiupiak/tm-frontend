import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';

import { UserDTO } from '@/types/user';

type RoteContext = {
  user: UserDTO | null;
};

export const Route = createRootRouteWithContext<RoteContext>()({
  component: () => <Outlet />,
});
