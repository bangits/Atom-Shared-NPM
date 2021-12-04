import { useEffect, useState } from 'react';

export const useFirstValue = <T>(value: T) => {
  const [latestValue, setLatestValue] = useState<T>(value);

  useEffect(() => {
    if (!latestValue && value) setLatestValue(value);
  }, [value]);

  return latestValue;
};
