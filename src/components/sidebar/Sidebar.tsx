import { useState } from 'react';
import clsx from 'clsx';

import { SidebarButton } from './SidebarButton';
import { SidebarItem } from './SidebarItem';
import { config } from './config';

import { LogoIcon, MenuIcon } from '../icons';

import classes from './sidebar.module.css';

const MobileSidebar = () => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <div className={classes.sidebarMob}>
      <SidebarButton onClick={() => setOpened((prev) => !prev)}>
        <MenuIcon />
      </SidebarButton>

      {opened && (
        <div className={classes.menuContainer}>
          {config.map((item) => (
            <SidebarItem key={item.path} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

const WebSidebar = () => {
  return (
    <nav className={clsx(classes.sidebarWeb, classes.expandedWeb)}>
      <div className={classes.logo}>
        <LogoIcon size="40" />
        <h1>TM</h1>
      </div>

      <div className={classes.itemContainer}>
        {config.map((item) => (
          <SidebarItem key={item.path} {...item} />
        ))}
      </div>
    </nav>
  );
};

export const Sidebar = () => {
  return (
    <>
      <MobileSidebar />
      <WebSidebar />
    </>
  );
};
