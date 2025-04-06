import { ComponentPropsWithoutRef } from 'react';

import { useTabContext } from './TabProvider';
import classes from './tab.module.css';

type TabButtonProps = {
  name: string;
} & Omit<ComponentPropsWithoutRef<'button'>, 'onClick' | 'type'>;

export const TabButton = ({ children, name, ...rest }: TabButtonProps) => {
  const { tab, setTab } = useTabContext();

  return (
    <button
      {...rest}
      type="button"
      onClick={() => setTab(name)}
      className={classes.tabButton}
    >
      {children}
      {tab === name && <div className={classes.active} />}
    </button>
  );
};
