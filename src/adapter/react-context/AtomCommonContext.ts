import { ResourceManagerUseCase } from '@/domain/use-case';
import { LocalStorageService, TranslationService } from '@/services';
import { createContext } from 'react';

export interface IAtomCommonContext {
  resourceManagerUseCase: ResourceManagerUseCase;
  translationService: TranslationService;
  localStorageService: LocalStorageService;
}

export const AtomCommonContext = createContext<IAtomCommonContext>(null);
