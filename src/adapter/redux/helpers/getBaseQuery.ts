import { DiContainer } from '@/di';
import { BaseQueryFn } from '@reduxjs/toolkit/query';
import { immerable } from 'immer';
export interface CreateBaseQueryArgument {
  useCaseName: string;
}

export interface CreateBaseQueryReturnType<T extends Record<string, (...args: any[]) => void>>
  extends BaseQueryFn<
    {
      methodName: keyof T;
      methodArguments: Parameters<T[keyof T]>;
    },
    unknown,
    { message: string }
  > {}

export const getBaseQuery =
  (containerInstance: DiContainer) =>
  <T extends {}>({ useCaseName }: CreateBaseQueryArgument): CreateBaseQueryReturnType<T> =>
  async ({ methodName, methodArguments }) => {
    try {
      const useCase = containerInstance.diContainer.get(useCaseName);
      const method = useCase[methodName] as (...args: any[]) => Promise<unknown>;
      const data = await method(...(methodArguments as any[]));
      if (data && typeof data === 'object') data[immerable] = true;
      return { data };
    } catch (error) {
      const errorStatus = error.response?.data?.Status || error.response?.data?.status;

      if (errorStatus) return Promise.reject(errorStatus);

      return Promise.reject(error);
    }
  };
