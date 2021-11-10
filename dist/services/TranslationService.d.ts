import { TranslationModel } from '../domain/models';
import { LanguageType } from '../domain/types';
import { Subscribable } from './Subscribable';
export declare class TranslationService extends Subscribable<TranslationModel> {
    private readonly translationUseCase;
    private initialized;
    init: (defaultLanguage: LanguageType) => void;
    changeLanguage: (language: LanguageType) => TranslationModel;
    get: (key: string) => string;
}
