import { DiContainer } from '@/di';
import { BaseError } from '@/domain';
import { BaseQueryFn } from '@reduxjs/toolkit/query';
import { immerable } from 'immer';

interface CreateBaseQueryArgument {
  useCaseName: string;
}

interface CreateBaseQueryReturnType<T extends Record<string, (...args: any[]) => void>>
  extends BaseQueryFn<
    {
      methodName: keyof T;
      methodArguments: Parameters<T[keyof T]>;
    },
    unknown,
    BaseError
  > {}

export const getBaseQuery =
  (containerInstance: DiContainer) =>
  <T extends {}>({ useCaseName }: CreateBaseQueryArgument): CreateBaseQueryReturnType<T> =>
  async ({ methodName, methodArguments }) => {
    const useCase = containerInstance.diContainer.get(useCaseName);

    const method = useCase[methodName] as (...args: any[]) => Promise<unknown>;

    const data = await method(...(methodArguments as any[]));

    data[immerable] = true;

    return { data };
  };
