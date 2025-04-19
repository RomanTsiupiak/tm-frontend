import { Link } from '@tanstack/react-router';
import { ComponentType } from 'react';
import clsx from 'clsx';

import { IconBaseProps } from '../icons/IconBase';

import classes from './sidebar.module.css';

type SidebarItemProps = {
  path: string;
  title: string;
  icon: ComponentType<IconBaseProps>;
};

export const SidebarItem = ({ path, title, icon: Icon }: SidebarItemProps) => (
  <Link to={path}>
    {({ isActive }: { isActive: boolean }) => (
      <div
        className={clsx(classes.sidebarItem, isActive && classes.activeItem)}
      >
        <Icon />
        <p>{title}</p>
      </div>
    )}
  </Link>
);
