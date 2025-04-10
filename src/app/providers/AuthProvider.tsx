import { createContext, ReactNode, useContext } from 'react';

import { UserDTO } from '@/types/user';
import { useQuery } from '@tanstack/react-query';
import { getUserRequest } from '@/services/api/user';

const AuthContext = createContext<UserDTO | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { data } = useQuery({
    queryKey: ['me'],
    queryFn: () => getUserRequest(),
    retry: false,
  });

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
