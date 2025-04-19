import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

import { DashboardLayout } from '@/app/layout/DashboardLayout';

export const Route = createFileRoute('/(dashboard)/_dashboard')({
  component: RouteComponent,
  beforeLoad: ({ context }) => {
    if (!context.user) {
      throw redirect({ to: '/auth' });
    }
  },
});

function RouteComponent() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}
