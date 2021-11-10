/// <reference types="react" />
import { CustomSelectProps } from '../shared';
export interface RegionSelectProps extends CustomSelectProps {
    countryId?: number;
}
export declare const RegionSelect: ({ countryId, ...selectProps }: Partial<RegionSelectProps>) => JSX.Element;
