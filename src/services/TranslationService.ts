import { ITranslationUseCase } from "@/domain/boundaries";
import { TranslationModel } from "@/domain/models";
import { LanguageType } from "@/domain/types";
import { inject, injectable } from "inversify";
import { Subscribable } from './Subscribable';

@injectable()
export class TranslationService extends Subscribable<TranslationModel> {
    @inject('ITranslationUseCase')
    private translationUseCase: ITranslationUseCase 
    private initialized: boolean = false;

    init(defaultLanguage: LanguageType) {
        if (this.initialized) return;

        const translations = this.translationUseCase.getTranslationsByLanguageId(defaultLanguage);

        this.initialized = true;

        super.publish(translations);
    }

    changeLanguage(language: LanguageType): TranslationModel {
        const translations = this.translationUseCase.getTranslationsByLanguageId(language);

        super.publish(translations)

        return translations
    }

    get(key: string): string {
        return this.translationUseCase.getTranslation(key);
    }
}

export const translationService = new TranslationService();