import { PrimaryKey } from '../../types';
import { FilterRequestModel } from '../shared';
export interface RegionFilterRequestModel extends FilterRequestModel {
    countryId: PrimaryKey;
}
