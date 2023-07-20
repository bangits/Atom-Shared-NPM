import { replaceEmptyStringsWithNull, stringifyQuery } from '@/common/helpers';
import { serverErrorHandler } from '@/view/error-handlers';
import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { injectable } from 'inversify';
import { enviromentService } from './EnviromentService';
export interface HttpRequest<T extends QueryType, K = {}> {
  body?: K;
  query?: T;
  url: string;
  config?: AxiosRequestConfig;
}

export interface IHttpService {
  get<T, K extends QueryType>(request: HttpRequest<K>, options?: AxiosRequestConfig): Promise<T>;
  delete<T, K extends QueryType>(request: HttpRequest<K>, options?: AxiosRequestConfig): Promise<T>;
  post<T, K extends QueryType, D>(request: HttpRequest<K, D>, options?: AxiosRequestConfig): Promise<T>;
  put<T, K extends QueryType, D>(request: HttpRequest<K, D>, options?: AxiosRequestConfig): Promise<T>;
  patch<T, K extends QueryType, D>(request: HttpRequest<K, D>, options?: AxiosRequestConfig): Promise<T>;
}

export type QueryType = {};

@injectable()
export class HttpService implements IHttpService {
  public static logoutCb: () => void;

  private static token: string;
  private static projectId: number;

  private instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    this.instance.interceptors.response.use(...serverErrorHandler);
  }

  static setAccessToken(accessToken: string) {
    const tokenWithBearer = `Bearer ${accessToken}`;

    axios.defaults.headers.common.authorization = tokenWithBearer;
    // @ts-expect-error TODO: This functional will be changed
    axios.defaults.headers.common.projectId = 1;

    HttpService.token = tokenWithBearer;
  }

  static setProjectId(projectId: number) {
    axios.defaults.headers.common.projectId = projectId.toString();

    HttpService.projectId = projectId;
  }

  static setLogoutCb(logoutCb: () => void) {
    HttpService.logoutCb = logoutCb;
  }

  static buildQuery(data: QueryType): string {
    const query = stringifyQuery(data);

    return `/?${query}`;
  }

  async get<T, K = {}>(request: HttpRequest<K>, options?: AxiosRequestConfig): Promise<T> {
    return this.fetch<T>('get', request, options);
  }

  async post<T, K extends QueryType = QueryType, D = {}>(
    request: HttpRequest<K, D>,
    options?: AxiosRequestConfig
  ): Promise<T> {
    return this.fetch<T>('post', request, options);
  }

  async put<T, K extends QueryType = QueryType, D = {}>(
    request: HttpRequest<K, D>,
    options?: AxiosRequestConfig
  ): Promise<T> {
    return this.fetch<T>('put', request, options);
  }

  async patch<T, K extends QueryType = QueryType, D = {}>(
    request: HttpRequest<K, D>,
    options?: AxiosRequestConfig
  ): Promise<T> {
    return this.fetch<T>('patch', request, options);
  }

  async delete<T, K extends QueryType = QueryType>(request: HttpRequest<K>, options?: AxiosRequestConfig): Promise<T> {
    return this.fetch<T>('delete', request, options);
  }

  private async fetch<R, T = {}, K = {}>(
    method: Method,
    httpRequest: HttpRequest<T, K>,
    options: AxiosRequestConfig = {}
  ): Promise<R> {
    let typedQuery = httpRequest.query as unknown as Record<string, string | number>;

    if (!httpRequest.query) typedQuery = {};

    typedQuery.projectId = HttpService.projectId;

    httpRequest.query = typedQuery as unknown as T;

    if (httpRequest.body && !Array.isArray(!httpRequest.body))
      (httpRequest.body as unknown as Record<string, string | number>).projectId = HttpService.projectId;

    if (httpRequest.body && !(httpRequest.body instanceof FormData) && !Array.isArray(httpRequest.body))
      httpRequest.body = replaceEmptyStringsWithNull(httpRequest.body);

    const headers = {
      authorization: HttpService.token
    };

    return (
      await this.instance[method](
        `${httpRequest.url}${httpRequest.query ? HttpService.buildQuery(httpRequest.query) : ''}`,
        ...(method === 'GET' || method === 'get'
          ? [{ ...options, headers }]
          : [httpRequest.body, { ...options, headers }])
      )
    ).data;
  }
}

export const httpService = new HttpService({
  baseURL: enviromentService.get<string>('apiUrl')
});
