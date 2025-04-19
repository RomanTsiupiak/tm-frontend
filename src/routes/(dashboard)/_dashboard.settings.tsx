import { createFileRoute } from '@tanstack/react-router';

import { UiComingSoon } from '@/components';

export const Route = createFileRoute('/(dashboard)/_dashboard/settings')({
  component: RouteComponent,
});

function RouteComponent() {
  return <UiComingSoon name="Settings" />;
}
