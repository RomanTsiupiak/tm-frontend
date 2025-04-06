import { useState } from 'react';

import { TabContext } from './TabProvider';
import { TabButton } from './TabButton';
import { TabContainer } from './TabContainer';

type TabProps = {
  tabs: string[];
} & React.ComponentPropsWithRef<'div'>;

const TabsProvider = ({ tabs, children }: TabProps) => {
  const [tab, setTab] = useState<string>(tabs[0]);

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const Tabs = Object.assign(TabsProvider, {
  Button: TabButton,
  Container: TabContainer,
});
