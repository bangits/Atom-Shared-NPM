import { AutoMap } from '@automapper/classes';

export class SortModel {
  @AutoMap()
  sorting: {
    direction: number;
    property: string;
  };
}
