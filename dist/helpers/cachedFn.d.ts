export declare const cachedFn: <T extends (...args: any[]) => any>(cacheKey: string, fn: T) => (...args: Parameters<T>) => ReturnType<T>;
