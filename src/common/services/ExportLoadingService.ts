import { alert } from '@atom/design-system';
import { Subscribable } from './Subscribable';

export class ExportLoadingService extends Subscribable<string> {
  changeAlertId = (msg: string) => {
    if (!msg) alert.remove(msg);

    this.publish(msg);
  };
}

export const exportLoadingService = new ExportLoadingService();
