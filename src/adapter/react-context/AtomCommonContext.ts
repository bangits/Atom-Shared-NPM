import { ResourceManagerUseCase } from '@/domain/use-case';
import { LoadingService, LocalStorageService, TranslationService } from '@/services';
import { createContext } from 'react';

export interface IAtomCommonContext {
  resourceManagerUseCase: ResourceManagerUseCase;
  translationService: TranslationService;
  localStorageService: LocalStorageService;
  loadingService: LoadingService;
}

export const AtomCommonContext = createContext<IAtomCommonContext>(null);
