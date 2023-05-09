import { LocalStorageService, PermissionService, TranslationService } from '@/common/services';
import {
  ExchangeManagerUseCase,
  FileManagerUseCase,
  PageConfigsUseCase,
  ResourceManagerUseCase
} from '@/domain/use-case';
import { createContext } from 'react';

export interface IAtomCommonContext {
  resourceManagerUseCase: ResourceManagerUseCase;
  exchangeManagerUseCase: ExchangeManagerUseCase;
  translationService: TranslationService;
  localStorageService: LocalStorageService;
  fileManagerUseCase: FileManagerUseCase;
  pageConfigsUseCase: PageConfigsUseCase;
  permissionService:PermissionService;
}

export const AtomCommonContext = createContext<IAtomCommonContext>(null);
