import { AutoMap } from '@automapper/classes';

export class ExportViewModel {
  @AutoMap()
  pageConfig: string;

  @AutoMap()
  exportedBy: string;
}
