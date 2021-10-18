import { TranslationModel } from '../models';

export class TranslationEntity {
  private translations: TranslationModel = {};

  setTranslations(translations: TranslationModel) {
    this.translations = translations;
  }

  getTranslations() {
    return this.translations;
  }

  getTranslation(translationKey: string) {
    return this.translations[translationKey];
  }
}
