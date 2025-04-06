import { createContext, useContext } from 'react';

type TabContextType = {
  tab: string;
  setTab: (val: string) => void;
};

export const TabContext = createContext<TabContextType | null>(null);

export const useTabContext = () => {
  const props = useContext(TabContext);

  if (!props) {
    throw new Error('No context provided!');
  }

  return props;
};
