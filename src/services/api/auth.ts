import { UserDTO } from '@/types/user';
import { httpClient } from '../httpClient';

export type SignInRequest = {
  email: string;
  password: string;
};

export type SignInResponse = {
  access: string;
  refresh: string;
};

export const signInRequest = async (
  data: SignInRequest
): Promise<SignInResponse> => {
  const response = await httpClient.request<SignInRequest, SignInResponse>({
    method: 'POST',
    url: 'auth/login',
    data,
  });

  return response.data;
};

type SignUpRequest = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const signUpRequest = async (data: SignUpRequest) => {
  const response = await httpClient.request<SignUpRequest, UserDTO>({
    method: 'POST',
    url: 'auth/register',
    data,
  });

  return response.data;
};
