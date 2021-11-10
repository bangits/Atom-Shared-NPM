import { DiContainer } from '../../../di';
import { BaseError } from '../../../domain';
import { BaseQueryFn } from '@reduxjs/toolkit/query';
interface CreateBaseQueryArgument {
    useCaseName: string;
}
interface CreateBaseQueryReturnType<T extends Record<string, (...args: any[]) => void>> extends BaseQueryFn<{
    methodName: keyof T;
    methodArguments: Parameters<T[keyof T]>;
}, unknown, BaseError> {
}
export declare const getBaseQuery: (containerInstance: DiContainer) => <T extends {}>({ useCaseName }: CreateBaseQueryArgument) => CreateBaseQueryReturnType<T>;
export {};
