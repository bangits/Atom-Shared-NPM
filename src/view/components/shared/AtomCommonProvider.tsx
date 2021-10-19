import { DiContainer } from '@/di';
import React, { createContext, FC, useEffect, useState } from 'react';

export const DiContainerContext = createContext<DiContainer>(null);

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

  return <DiContainerContext.Provider value={containerInstance}>{children}</DiContainerContext.Provider>;
};
