import { exportLoadingService } from '@/common/services';

export const useExportLoading = () => {
  return exportLoadingService.publish;
};
