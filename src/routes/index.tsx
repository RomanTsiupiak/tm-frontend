import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => <></>,
  beforeLoad: ({ context }) => {
    console.log(context, 'CONTEX');
    throw redirect({ to: !!context.user ? '/dashboard' : '/auth' });
  },
});
