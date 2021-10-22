import { ITranslationUseCase } from '../boundaries';
import { LanguageType } from '../types';
export declare class TranslationUseCase implements ITranslationUseCase {
    private translationEntity;
    getTranslations(): import("../models").TranslationModel;
    getTranslation(key: string): string;
    getTranslationsByLanguageId(languageId: LanguageType): {
        save: string;
        apply: string;
        clear: string;
        resultLabel: string;
    };
}
