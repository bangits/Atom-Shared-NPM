import { BaseError } from '@/domain';
import { BaseQueryFn } from '@reduxjs/toolkit/query';
import { Container } from 'inversify';

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
  (diContainer: Container) =>
  <T extends {}>({ useCaseName }: CreateBaseQueryArgument): CreateBaseQueryReturnType<T> =>
  async ({ methodName, methodArguments }) => {
    const useCase = diContainer.get(useCaseName);

    const method = useCase[methodName] as (...args: any[]) => Promise<unknown>;

    return { data: await method(...(methodArguments as any[])) };
  };
