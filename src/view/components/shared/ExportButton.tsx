import { exportLoadingService } from '@/atom-common';
import {
  alert,
  ExportButton as DesignSystemExportButton,
  ExportButtonProps as DesignSystemExportButtonProps
} from '@atom/design-system';
import { useCallback, useEffect, useState } from 'react';

export interface ExportButtonProps extends Omit<DesignSystemExportButtonProps, 'disabled'> {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>;
}

export const ExportButton = (props: ExportButtonProps) => {
  const [exportButtonAlertId, setExportButtonAlertId] = useState(exportLoadingService.latestValue);

  const onExportButtonClick = useCallback(
    async (e) => {
      const alertId = alert.loading({
        alertLabel: 'Exporting the data...',
        autoClose: false
      });

      exportLoadingService.changeAlertId(alertId);
      setExportButtonAlertId(alertId);

      await props.onClick(e);

      setExportButtonAlertId(null);
      exportLoadingService.changeAlertId(null);

      alert.remove(alertId);

      alert.success({
        alertLabel: 'Successfully exported!'
      });
    },
    [props.onClick]
  );

  useEffect(() => {
    exportLoadingService.subscribe((alertId) => setExportButtonAlertId(alertId));
  }, []);

  return <DesignSystemExportButton {...props} disabled={!!exportButtonAlertId} onClick={onExportButtonClick} />;
};
