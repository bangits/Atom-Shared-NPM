import { AutoMap } from '@automapper/classes';
import { SortModel } from './SortModel';

export class PagedModel extends SortModel {
  @AutoMap()
  pagination: {
    page: number;
    pageSize: number;
  };
}
