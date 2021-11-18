import { AsyncReturnType } from '@/types';
import { useEffect, useState } from 'react';

export const useAsync = <T extends (...args: any[]) => Promise<any>, K = undefined>(
  fn: T,
  dependencies: any[] = [],
  defaultValue: K = undefined
): AsyncReturnType<T> | K => {
  const [returnValue, setReturnValue] = useState<AsyncReturnType<T> | K>(defaultValue);

  useEffect(() => {
    fn().then((value) => setReturnValue(value));
  }, dependencies);

  return returnValue;
};
