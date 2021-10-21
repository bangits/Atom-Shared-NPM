import { DiContainer } from '@/di';
import { FC, useEffect, useState } from 'react';
import { AtomCommonContext } from './AtomCommonContext';

export const AtomCommonProvider: FC = ({ children }) => {
  const [containerInstance, setContainerInstance] = useState<DiContainer>(null);

  useEffect(() => {
    const containerInstance = new DiContainer();

    containerInstance.configure(diFiles).then(() => {
      setTimeout(() => {
        setContainerInstance(containerInstance);
      }, 1000);
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
