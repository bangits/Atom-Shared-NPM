import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';

export interface HttpRequest<T, K = {}> {
  body?: K;
  query?: T;
  url: string;
}

export interface IHttpService {
  get<T, K>(request: HttpRequest<K>): Promise<T>;
  delete<T, K>(request: HttpRequest<K>): Promise<T>;

  post<T, K, D>(request: HttpRequest<K, D>): Promise<T>;
  put<T, K, D>(request: HttpRequest<K, D>): Promise<T>;
  patch<T, K, D>(request: HttpRequest<K, D>): Promise<T>;
}

export type QueryType = {};

export class HttpService implements IHttpService {
  private instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }

  async get<T, K = {}>(request: HttpRequest<K>): Promise<T> {
    return this.fetch<T>('get', request);
  }

  async post<T, K = {}, D = {}>(request: HttpRequest<K, D>): Promise<T> {
    return this.fetch<T>('post', request);
  }

  async put<T, K = {}, D = {}>(request: HttpRequest<K, D>): Promise<T> {
    return this.fetch<T>('put', request);
  }

  async patch<T, K = {}, D = {}>(request: HttpRequest<K, D>): Promise<T> {
    return this.fetch<T>('patch', request);
  }

  async delete<T, K = {}>(request: HttpRequest<K>): Promise<T> {
    return this.fetch<T>('delete', request);
  }

  private async fetch<R, T = {}, K = {}>(method: Method, httpRequest: HttpRequest<T, K>): Promise<R> {
    return (
      await this.instance[method](
        `${httpRequest.url}${httpRequest.query ? `?${httpRequest.query}` : ''}`,
        httpRequest.body
      )
    ).data;
  }
}
