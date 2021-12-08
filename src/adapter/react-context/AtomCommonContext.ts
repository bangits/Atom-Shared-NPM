import { LocalStorageService, TranslationService } from '@/common/services';
import { FileManagerUseCase, ResourceManagerUseCase } from '@/domain/use-case';
import { createContext } from 'react';

export interface IAtomCommonContext {
  resourceManagerUseCase: ResourceManagerUseCase;
  translationService: TranslationService;
  localStorageService: LocalStorageService;
  fileManagerUseCase: FileManagerUseCase;
}

export const AtomCommonContext = createContext<IAtomCommonContext>(null);
