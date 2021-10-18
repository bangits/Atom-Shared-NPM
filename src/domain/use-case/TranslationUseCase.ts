import { TranslationEntity } from '../entities';

export class TranslationUseCase {
  getTranslations() {
    const translationEntity = new TranslationEntity();

    translationEntity.setTranslations({
      save: 'Сохранить',
      bannerSection: {
        x: 'Х'
      }
    });

    translationEntity.getTranslation('save');
  }
}
