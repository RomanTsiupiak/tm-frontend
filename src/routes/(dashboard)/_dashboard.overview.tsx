import { createFileRoute } from '@tanstack/react-router';

import { UiComingSoon } from '@/components';

export const Route = createFileRoute('/(dashboard)/_dashboard/overview')({
  component: RouteComponent,
});

function RouteComponent() {
  return <UiComingSoon name="Overview" />;
}
