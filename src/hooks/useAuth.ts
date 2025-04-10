import { useQuery } from '@tanstack/react-query';

import { getUserRequest } from '@/services/api/user';
import { authService } from '@/services/authService';

export const useAuth = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['me'],
    queryFn: () => getUserRequest(),
    enabled: !!authService.getAuthToken(),
  });

  return { user: data ?? null, isLoading };
};
