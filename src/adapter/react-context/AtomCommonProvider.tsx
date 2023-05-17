/* eslint-disable no-console */
import { PermissionService, TranslationService } from '@/common/services';
import { DiContainer } from '@/di';
import { DI_CONSTANTS } from '@/di/constants';
import { LanguageType } from '@/domain';
import { FC, useEffect, useState } from 'react';
import { AtomCommonContext } from './AtomCommonContext';

export interface AtomCommonProviderProps {
  initLanguage?: LanguageType;
  initializeLanguage?: boolean;
}

const containerInstance = new DiContainer();

containerInstance.configure();

export const AtomCommonProvider: FC<AtomCommonProviderProps> = ({
  children,
  initLanguage = 'en'
}) => {
  useEffect(() => {
    (async () => {
      const translationService: TranslationService = containerInstance.diContainer.get(
        DI_CONSTANTS.TranslationService
      );
      
      const permissionService: PermissionService = containerInstance.diContainer.get(DI_CONSTANTS.PermissionService);

      await Promise.all([
        permissionService.init(),
        translationService.init(initLanguage)
      ]);
    })();
  }, []);

  if (!containerInstance) return null;

  return (
    <AtomCommonContext.Provider
      value={{
        resourceManagerUseCase: containerInstance.diContainer.get(DI_CONSTANTS.ResourceManagerUseCase),
        translationService: containerInstance.diContainer.get(DI_CONSTANTS.TranslationService),
        localStorageService: containerInstance.diContainer.get(DI_CONSTANTS.LocalStorageService),
        fileManagerUseCase: containerInstance.diContainer.get(DI_CONSTANTS.FileManagerUseCase),
        pageConfigsUseCase: containerInstance.diContainer.get(DI_CONSTANTS.PageConfigsUseCase),
        exchangeManagerUseCase: containerInstance.diContainer.get(DI_CONSTANTS.ExchangeManagerUseCase),
        permissionService: containerInstance.diContainer.get(DI_CONSTANTS.PermissionService)
      }}>
      {children}
    </AtomCommonContext.Provider>
  );
};
