import { ComponentPropsWithoutRef } from 'react';

import { useTabContext } from './TabProvider';

type TabContainerProps = {
  name: string;
} & ComponentPropsWithoutRef<'div'>;

export const TabContainer = ({
  name,
  children,
  ...rest
}: TabContainerProps) => {
  const { tab } = useTabContext();

  if (tab !== name) return null;

  return <div {...rest}>{children}</div>;
};
