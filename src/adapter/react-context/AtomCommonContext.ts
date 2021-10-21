import { ResourceManagerUseCase } from '@/domain/use-case';
import { TranslationService } from '@/services';
import { createContext } from 'react';

export interface IAtomCommonContext {
  resourceManagerUseCase: ResourceManagerUseCase;
  translationService: TranslationService;
}

export const AtomCommonContext = createContext<IAtomCommonContext>(null);
