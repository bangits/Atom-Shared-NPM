import { TranslationService } from '@/common/services';
import { DiContainer } from '@/di';
import { DI_CONSTANTS } from '@/di/constants';
import { LanguageType } from '@/domain';
import { Container } from 'inversify';
import { FC, useEffect, useState } from 'react';
import { AtomCommonContext } from './AtomCommonContext';

export interface AtomCommonProviderProps {
  initLanguage?: LanguageType;
  initializeLanguage?: boolean;
}

export const AtomCommonProvider: FC<AtomCommonProviderProps> = ({
  children,
  initLanguage = 'en',
  initializeLanguage
}) => {
  const [containerInstance, setContainerInstance] = useState<Container>(null);

  useEffect(() => {
    const containerInstance = new DiContainer();

    containerInstance.configure();

    (async () => {
      if (initializeLanguage) {
        const translationService: TranslationService = DiContainer.instance.get(DI_CONSTANTS.TranslationService);

        await translationService.init(initLanguage);
      }

      setContainerInstance(DiContainer.instance);
    })();
  }, []);

  if (!containerInstance) return null;

  return (
    <AtomCommonContext.Provider
      value={{
        resourceManagerUseCase: containerInstance.get(DI_CONSTANTS.ResourceManagerUseCase),
        translationService: containerInstance.get(DI_CONSTANTS.TranslationService),
        localStorageService: containerInstance.get(DI_CONSTANTS.LocalStorageService),
        fileManagerUseCase: containerInstance.get(DI_CONSTANTS.FileManagerUseCase),
        pageConfigsUseCase: containerInstance.get(DI_CONSTANTS.PageConfigsUseCase),
        exchangeManagerUseCase: containerInstance.get(DI_CONSTANTS.ExchangeManagerUseCase)
      }}>
      {children}
    </AtomCommonContext.Provider>
  );
};
