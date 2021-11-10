import { ITranslationUseCase } from '../boundaries';
import { LanguageType } from '../types';
export declare class TranslationUseCase implements ITranslationUseCase {
    private translationEntity;
    getTranslations(): import("..").TranslationModel;
    getTranslation(key: string): string;
    getTranslationsByLanguageId(languageId: LanguageType): {
        login: {
            username: string;
            password: string;
            title: string;
            subtitle: string;
            buttonText: string;
            'user-not-found': string;
        };
        validations: {
            required: string;
            max: string;
            min: string;
        };
    };
}
