type SetAuthParams = {
  access: string;
  refresh: string;
};

class AuthService {
  setAuthToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  setRefreshToken(token: string) {
    localStorage.setItem('refresh_token', token);
  }

  setAuth({ access, refresh }: SetAuthParams) {
    this.setAuthToken(access);
    this.setRefreshToken(refresh);
  }

  getAuthToken() {
    return localStorage.getItem('access_token') ?? '';
  }

  getRefreshToken() {
    return localStorage.getItem('refresh_token') ?? '';
  }

  removeAuth() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }
}

export const authService = new AuthService();
