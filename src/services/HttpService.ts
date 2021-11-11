import { stringifyQuery } from '@/helpers';
import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { injectable } from 'inversify';
import { enviromentService } from './EnviromentService';
export interface HttpRequest<T extends QueryType, K = {}> {
  body?: K;
  query?: T;
  url: string;
}

export interface IHttpService {
  get<T, K extends QueryType>(request: HttpRequest<K>): Promise<T>;
  delete<T, K extends QueryType>(request: HttpRequest<K>): Promise<T>;

  post<T, K extends QueryType, D>(request: HttpRequest<K, D>): Promise<T>;
  put<T, K extends QueryType, D>(request: HttpRequest<K, D>): Promise<T>;
  patch<T, K extends QueryType, D>(request: HttpRequest<K, D>): Promise<T>;
}

export type QueryType = {};

@injectable()
export class HttpService implements IHttpService {
  private instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }

  static buildQuery(data: QueryType): string {
    return `/${stringifyQuery(data)}`;
  }

  async get<T, K = {}>(request: HttpRequest<K>): Promise<T> {
    return this.fetch<T>('get', request);
  }

  async post<T, K extends QueryType = QueryType, D = {}>(request: HttpRequest<K, D>): Promise<T> {
    return this.fetch<T>('post', request);
  }

  async put<T, K extends QueryType = QueryType, D = {}>(request: HttpRequest<K, D>): Promise<T> {
    return this.fetch<T>('put', request);
  }

  async patch<T, K extends QueryType = QueryType, D = {}>(request: HttpRequest<K, D>): Promise<T> {
    return this.fetch<T>('patch', request);
  }

  async delete<T, K extends QueryType = QueryType>(request: HttpRequest<K>): Promise<T> {
    return this.fetch<T>('delete', request);
  }

  private async fetch<R, T = {}, K = {}>(method: Method, httpRequest: HttpRequest<T, K>): Promise<R> {
    return (
      await this.instance[method](
        `${httpRequest.url}${httpRequest.query ? HttpService.buildQuery(httpRequest.query) : ''}`,
        httpRequest.body
      )
    ).data;
  }
}

export const httpService = new HttpService({
  baseURL: enviromentService.get<string>('apiUrl')
});
