import { AxiosRequestConfig } from 'axios';
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
export declare class HttpService implements IHttpService {
    private instance;
    constructor(config: AxiosRequestConfig);
    get<T, K = {}>(request: HttpRequest<K>): Promise<T>;
    post<T, K = {}, D = {}>(request: HttpRequest<K, D>): Promise<T>;
    put<T, K = {}, D = {}>(request: HttpRequest<K, D>): Promise<T>;
    patch<T, K = {}, D = {}>(request: HttpRequest<K, D>): Promise<T>;
    delete<T, K = {}>(request: HttpRequest<K>): Promise<T>;
    private fetch;
}
