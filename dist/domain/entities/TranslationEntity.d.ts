import { TranslationModel } from '../models';
export declare class TranslationEntity {
    private translations;
    setTranslations(translations: TranslationModel): void;
    getTranslations(): TranslationModel;
    getTranslation(translationKey: string): string;
}
