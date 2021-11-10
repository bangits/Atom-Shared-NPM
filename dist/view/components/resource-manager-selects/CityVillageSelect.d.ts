/// <reference types="react" />
import { CustomSelectProps } from '../shared';
export interface CityVillageSelectProps extends Partial<CustomSelectProps> {
    regionId: number;
    isCity: boolean;
}
export declare const CityVillageSelect: ({ isCity, regionId, ...selectProps }: CityVillageSelectProps) => JSX.Element;
