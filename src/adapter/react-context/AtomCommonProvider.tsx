import { DiContainer } from '@/di';
import { LanguageType } from '@/domain';
import { TranslationService } from '@/services';
import { FC, useEffect, useState } from 'react';
import { AtomCommonContext } from './AtomCommonContext';

export interface AtomCommonProviderProps {
  initLanguage?: LanguageType;
}

export const AtomCommonProvider: FC<AtomCommonProviderProps> = ({ children, initLanguage }) => {
  const [containerInstance, setContainerInstance] = useState<DiContainer>(null);

  useEffect(() => {
    const containerInstance = new DiContainer();

    containerInstance.configure(diFiles).then(async () => {
      if (initLanguage) {
        const translationService: TranslationService = containerInstance.diContainer.get('TranslationService');

        await translationService.init(initLanguage);
      }

      setTimeout(() => {
        setContainerInstance(containerInstance);
      }, 3000);
    });
  }, []);

  if (!containerInstance) return null;

  return (
    <AtomCommonContext.Provider
      value={{
        resourceManagerUseCase: containerInstance.diContainer.get('ResourceManagerUseCase'),
        translationService: containerInstance.diContainer.get('TranslationService')
      }}>
      {children}
    </AtomCommonContext.Provider>
  );
};
