import { ComponentPropsWithoutRef } from 'react';

export const SidebarButton = ({
  ...rest
}: ComponentPropsWithoutRef<'button'>) => {
  return <button {...rest} className="p-2"></button>;
};
