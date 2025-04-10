import { UserDTO } from '@/types/user';

import { httpClient } from '../httpClient';

export const getUserRequest = async (): Promise<UserDTO> => {
  const response = await httpClient.request<null, UserDTO>({
    method: 'GET',
    url: 'me',
  });

  return response.data;
};
