import { AxiosRequestConfig } from 'axios';
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
export declare type QueryType = {};
export declare class HttpService implements IHttpService {
    private instance;
    constructor(config: AxiosRequestConfig);
    static buildQuery(data: QueryType): string;
    get<T, K = {}>(request: HttpRequest<K>): Promise<T>;
    post<T, K extends QueryType = QueryType, D = {}>(request: HttpRequest<K, D>): Promise<T>;
    put<T, K extends QueryType = QueryType, D = {}>(request: HttpRequest<K, D>): Promise<T>;
    patch<T, K extends QueryType = QueryType, D = {}>(request: HttpRequest<K, D>): Promise<T>;
    delete<T, K extends QueryType = QueryType>(request: HttpRequest<K>): Promise<T>;
    private fetch;
}
export declare const httpService: HttpService;
