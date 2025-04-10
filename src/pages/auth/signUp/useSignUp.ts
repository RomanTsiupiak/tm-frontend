import { useMutation } from '@tanstack/react-query';

import { signUpRequest } from '@/services/api';
import { ApiError } from '@/services/httpClient';

export const useSignUp = () => {
  const { mutateAsync, isPending, error } = useMutation({
    mutationKey: ['signUp'],
    mutationFn: signUpRequest,
  });

  const apiError = (error as ApiError)?.response?.data?.message;

  return { signUp: mutateAsync, isPending, apiError };
};
