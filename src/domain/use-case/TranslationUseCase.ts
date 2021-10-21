import { injectable } from 'inversify';
import { ITranslationUseCase } from '../boundaries';
import { TranslationEntity } from '../entities';
import { LanguageType } from '../types';

@injectable()
export class TranslationUseCase implements ITranslationUseCase {
  private translationEntity = new TranslationEntity();

  getTranslations() {
    return this.translationEntity.getTranslations();
  }

  getTranslation(key: string): string {
    return this.translationEntity.getTranslation(key);
  }

  getTranslationsByLanguageId(languageId: LanguageType) {
    const mockData = {
      save: 'Save',
      apply: 'Apply',
      clear: 'Clear',
      resultLabel: 'found n users'
    };

    this.translationEntity.setTranslations(mockData);

    return mockData;
  }
}
