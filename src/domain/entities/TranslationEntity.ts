import { getObjectValueByKey } from '@/helpers';
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
    return getObjectValueByKey(this.translations, translationKey);
  }
}
