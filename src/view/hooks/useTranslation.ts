import { AtomCommonContext } from '@/adapter/react-context';
import { TranslationModel } from '@/domain/models';
import { LanguageType } from '@/domain/types';
import { useContext, useEffect, useMemo, useState } from 'react';

export interface UseTranslationReturnValue {
  init(defaultLanguageId: LanguageType): void;
  changeLanguage(language: LanguageType): void;
  get(key: string): string;
}

export const useTranslation = (): UseTranslationReturnValue => {
  const containerInstance = useContext(AtomCommonContext);

  const [currentTranslations, setCurrentTranslations] = useState<TranslationModel>({});

  const [translationService] = useState(containerInstance.translationService);

  useEffect(() => {
    const unsubscribe = translationService.subscribe(setCurrentTranslations);

    return () => {
      unsubscribe();
    };
  }, []);

  return useMemo(
    () => ({
      init: (defaultLanguageId) => translationService?.init(defaultLanguageId),
      changeLanguage: translationService?.changeLanguage,
      get: translationService?.get
    }),
    [translationService]
  );
};
