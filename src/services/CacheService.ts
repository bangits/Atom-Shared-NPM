import { injectable } from 'inversify';

export interface ICacheService {
  get<T>(key: string): Promise<T>;
  set<T>(key: string, value: T): void;
}

@injectable()
export class CacheService implements ICacheService {
  private readonly cachedData = {};

  get<T>(key: string) {
    return this.cachedData[key] as T;
  }

  set<T>(key: string, value: T) {
    this.cachedData[key] = value;
  }
}
