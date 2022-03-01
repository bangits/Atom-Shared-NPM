import { HttpService } from '@/atom-common';
import { AxiosError } from 'axios';

export const serverErrorHandler = [
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) HttpService.logoutCb?.();

    return Promise.reject(error);
  }
];
