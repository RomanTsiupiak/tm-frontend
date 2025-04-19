import { ComponentProps } from 'react';

import { Sidebar } from '@/components';

type DashboardLayout = ComponentProps<'main'>;

export const DashboardLayout = ({ children }: DashboardLayout) => (
  <main className="w-screen h-screen bg-secondary-100 overflow-hidden p-2 sm:flex sm:gap-2 ">
    <Sidebar />
    {children}
  </main>
);
