import { TranslationService } from '@/common/services';
import { DiContainer } from '@/di';
import { DI_CONSTANTS } from '@/di/constants';
import { LanguageType } from '@/domain';
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
  const [containerInstance, setContainerInstance] = useState<DiContainer>(null);

  useEffect(() => {
    const containerInstance = new DiContainer();

    containerInstance.configure();

    (async () => {
      if (initializeLanguage) {
        const translationService: TranslationService = containerInstance.diContainer.get(
          DI_CONSTANTS.TranslationService
        );

        await translationService.init(initLanguage);
      }

      setContainerInstance(containerInstance);
    })();
  }, []);

  if (!containerInstance) return null;

  return (
    <AtomCommonContext.Provider
      value={{
<<<<<<< HEAD
        resourceManagerUseCase: containerInstance.diContainer.get('ResourceManagerUseCase'),
        translationService: containerInstance.diContainer.get('TranslationService'),
        localStorageService: containerInstance.diContainer.get('LocalStorageService'),
=======
        resourceManagerUseCase: containerInstance.diContainer.get(DI_CONSTANTS.ResourceManagerUseCase),
        translationService: containerInstance.diContainer.get(DI_CONSTANTS.TranslationService),
        localStorageService: containerInstance.diContainer.get(DI_CONSTANTS.LocalStorageService)
>>>>>>> 451393201bfd47a786b530fbe26a588e94ae7999
      }}>
      {children}
    </AtomCommonContext.Provider>
  );
};
