import { AutoMap } from '@automapper/classes';

export class PagedResult<T> {
  @AutoMap()
  results: T[];

  @AutoMap()
  currentPage: number;

  @AutoMap()
  pageCount: number;

  @AutoMap()
  pageSize: number;

  @AutoMap()
  rowCount: number;
}
