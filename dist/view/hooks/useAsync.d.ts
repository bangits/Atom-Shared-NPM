import { AsyncReturnType } from '../../types';
export declare const useAsync: <T extends (...args: any[]) => Promise<any>, K = undefined>(fn: T, defaultValue?: K) => K | AsyncReturnType<T>;
