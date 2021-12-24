import { LocalStorageService, TranslationService } from '@/common/services';
import { FileManagerUseCase, PageConfigsUseCase, ResourceManagerUseCase } from '@/domain/use-case';
import { createContext } from 'react';

export interface IAtomCommonContext {
  resourceManagerUseCase: ResourceManagerUseCase;
  translationService: TranslationService;
  localStorageService: LocalStorageService;
  fileManagerUseCase: FileManagerUseCase;
  pageConfigsUseCase: PageConfigsUseCase;
}

export const AtomCommonContext = createContext<IAtomCommonContext>(null);
