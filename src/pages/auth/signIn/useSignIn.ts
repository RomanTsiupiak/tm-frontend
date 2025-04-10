import { useMutation } from '@tanstack/react-query';

import { signInRequest } from '@/services/api';
import { ApiError } from '@/services/httpClient';

export const useSignIn = () => {
  const { mutateAsync, isPending, error } = useMutation({
    mutationKey: ['signIn'],
    mutationFn: signInRequest,
  });

  const apiError = (error as ApiError)?.response?.data?.message;

  return {
    signIn: mutateAsync,
    isPending,
    apiError,
  };
};
