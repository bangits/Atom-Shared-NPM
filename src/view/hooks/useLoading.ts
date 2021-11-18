import { AtomCommonContext } from '@/adapter/react-context';
import { useContext } from 'react';

export const useLoading = () => {
  const { loadingService } = useContext(AtomCommonContext);

  return loadingService.publish;
};
