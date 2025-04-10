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
