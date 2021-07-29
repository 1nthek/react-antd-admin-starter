import Cookies from 'js-cookie';

export const getToken = (): string | null | undefined => {
  if (typeof window === undefined) {
    return null;
  }
  return Cookies.get('auth_token');
};
