import { PrimaryKey } from '@/domain';
import { PageConfigViewModel } from './PageConfigViewModel';

export class PageConfigsViewModel {
  filtersConfig: {
    id: PrimaryKey;
    config: PageConfigViewModel[];
  };

  columnConfig: {
    id: PrimaryKey;
    config: PageConfigViewModel[];
  };
}
