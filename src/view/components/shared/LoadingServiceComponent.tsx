import { loadingService } from '@/common/services';
import { useEffect, useState } from 'react';

export const LoadingServiceComponent = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    loadingService.subscribe(setLoading);
  }, []);

  if (!isLoading) return null;

  return <div>loading...</div>;
};
