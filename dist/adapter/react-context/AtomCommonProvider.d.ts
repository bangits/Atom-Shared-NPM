import { LanguageType } from '../../domain';
import { FC } from 'react';
export interface AtomCommonProviderProps {
    initLanguage?: LanguageType;
    initializeLanguage?: boolean;
}
export declare const AtomCommonProvider: FC<AtomCommonProviderProps>;
