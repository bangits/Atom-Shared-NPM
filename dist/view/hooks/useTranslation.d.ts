import { LanguageType } from '../../domain/types';
export interface UseTranslationReturnValue {
    init(defaultLanguageId: LanguageType): void;
    changeLanguage(language: LanguageType): void;
    get(key: string): string;
}
export declare const useTranslation: () => UseTranslationReturnValue;
