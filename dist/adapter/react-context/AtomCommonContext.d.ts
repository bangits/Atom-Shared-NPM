/// <reference types="react" />
import { ResourceManagerUseCase } from '../../domain/use-case';
import { TranslationService } from '../../services';
export interface IAtomCommonContext {
    resourceManagerUseCase: ResourceManagerUseCase;
    translationService: TranslationService;
}
export declare const AtomCommonContext: import("react").Context<IAtomCommonContext>;
