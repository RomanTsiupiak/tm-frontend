import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => <></>,
  beforeLoad: ({ context }) => {
    throw redirect({ to: !!context.user ? '/overview' : '/auth' });
  },
});
