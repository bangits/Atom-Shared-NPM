import { LocalStorageService, TranslationService } from '@/common/services';
import { ResourceManagerUseCase } from '@/domain/use-case';
import { createContext } from 'react';

export interface IAtomCommonContext {
  resourceManagerUseCase: ResourceManagerUseCase;
  translationService: TranslationService;
  localStorageService: LocalStorageService;
}

export const AtomCommonContext = createContext<IAtomCommonContext>(null);
