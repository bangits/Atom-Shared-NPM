import { DI_CONSTANTS } from '@/di/constants';
import { ITranslationUseCase } from '@/domain/boundaries';
import { TranslationModel } from '@/domain/models';
import { LanguageType } from '@/domain/types';
import { inject, injectable } from 'inversify';
import { Subscribable } from './Subscribable';

@injectable()
export class TranslationService extends Subscribable<TranslationModel> {
  @inject(DI_CONSTANTS.TranslationUseCase)
  private readonly translationUseCase: ITranslationUseCase;

  private initialized = false;

  init = (defaultLanguage: LanguageType) => {
    if (this.initialized) return;

    const translations = this.translationUseCase.getTranslationsByLanguageId(defaultLanguage);

    this.publish(translations);

    this.initialized = true;
  };

  changeLanguage = (language: LanguageType): TranslationModel => {
    const translations = this.translationUseCase.getTranslationsByLanguageId(language);

    this.publish(translations);

    return translations;
  };

  get = (key: string): string => {
    return this.translationUseCase.getTranslation(key);
  };
}
