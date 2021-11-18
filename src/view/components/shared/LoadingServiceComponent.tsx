import { AtomCommonContext } from '@/adapter/react-context';
import { useContext, useEffect, useState } from 'react';

export const LoadingServiceComponent = () => {
  const { loadingService } = useContext(AtomCommonContext);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    loadingService.subscribe(setLoading);
  }, []);

  if (!isLoading) return null;

  return <div>loading...</div>;
};
