import { ICacheService } from '@/services';

export const cachedFn = <T extends (...args: any[]) => any>(cacheKey: string, fn: T) =>
  function (...args: Parameters<T>): ReturnType<T> {
    const cachedResult = (this as { cacheService: ICacheService }).cacheService.get<ReturnType<T>>(cacheKey);

    if (cachedResult) return cachedResult;

    return fn(...args) as ReturnType<T>;
  };
