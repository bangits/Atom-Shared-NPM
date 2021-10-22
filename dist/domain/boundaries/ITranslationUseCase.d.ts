import { TranslationModel } from "../models";
export interface ITranslationUseCase {
    getTranslations(): TranslationModel;
    getTranslation(key: string): string;
    getTranslationsByLanguageId(languageId: string): TranslationModel;
}
