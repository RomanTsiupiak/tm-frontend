import axios, {
  Axios,
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse,
} from 'axios';

import { authService } from './authService';

const ApiUrl = import.meta.env.VITE_API_URL || '';

export type Request = Omit<AxiosRequestConfig, 'baseURL'>;
export type ApiError = AxiosError<{ message: string }>;

class HttpClient {
  private client: Axios = axios.create({ baseURL: ApiUrl });

  constructor() {
    this.init();
    this.authInterceptor();
  }

  private setAuthHeader(token: string) {
    this.client.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  private init() {
    this.setAuthHeader(authService.getAuthToken());
  }

  private authInterceptor() {
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        const isAuthError = error.status === 401;

        if (!isAuthError) return Promise.reject(error);
      
        authService.removeAuth();

        return Promise.reject(error);
      }
    );
  }

  request = async <Req, Res>({ ...rest }: Request) => {
    return this.client?.request<Req, AxiosResponse<Res>>({ ...rest });
  };
}

export const httpClient = new HttpClient();
