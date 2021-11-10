export interface ICacheService {
    get<T>(key: string): T;
    set<T>(key: string, value: T): void;
}
export declare class CacheService implements ICacheService {
    private readonly cachedData;
    get<T>(key: string): T;
    set<T>(key: string, value: T): void;
}
