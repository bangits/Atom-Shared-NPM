import { exportLoadingService } from '@/atom-common';
import { useTranslation } from '@/view';
import {
  alert,
  ExportButton as DesignSystemExportButton,
  ExportButtonProps as DesignSystemExportButtonProps
} from '@atom/design-system';
import { MouseEvent, useCallback, useEffect, useState } from 'react';

export interface ExportButtonProps extends Omit<DesignSystemExportButtonProps, 'disabled' | 'onClick'> {
  onClick: (e: MouseEvent<SVGSVGElement, MouseEvent>) => Promise<void>;
}

export const ExportButton = (props: ExportButtonProps) => {
  const [exportButtonAlertId, setExportButtonAlertId] = useState(exportLoadingService.latestValue);

  const t = useTranslation();

  const onExportButtonClick = useCallback(
    async (e) => {
      const alertId = alert.loading({
        alertLabel: t.get('exportingData'),
        autoClose: false
      });

      try {
        exportLoadingService.changeAlertId(alertId);
        setExportButtonAlertId(alertId);

        await props.onClick(e);

        alert.success({
          alertLabel: t.get('dataWasExported')
        });
      } catch {
        alert.error({
          alertLabel: t.get('connectionError')
        });
      } finally {
        setExportButtonAlertId(null);
        exportLoadingService.changeAlertId(null);
        alert.remove(alertId);
      }
    },
    [props.onClick]
  );

  useEffect(() => {
    exportLoadingService.subscribe((alertId) => setExportButtonAlertId(alertId));
  }, []);

  return (
    <DesignSystemExportButton
      {...props}
      tooltipText={t.get('export')}
      disabled={!!exportButtonAlertId}
      onClick={onExportButtonClick}
    />
  );
};
