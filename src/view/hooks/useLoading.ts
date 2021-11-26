import { loadingService } from '@/common/services';

export const useLoading = () => {
  return loadingService.publish;
};
