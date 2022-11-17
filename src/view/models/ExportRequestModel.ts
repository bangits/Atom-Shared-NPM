import { AutoMap } from '@automapper/classes';

export class ExportRequestModel {
  @AutoMap()
  pageConfig: string;

  @AutoMap()
  exportedBy: string;

  timeZoneHours: number;
}
