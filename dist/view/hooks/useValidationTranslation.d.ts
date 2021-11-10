export interface UseValidationTranslationReturnValue {
    required(): string;
    max(value: number): string;
    min(value: number): string;
}
export declare const useValidationTranslation: () => UseValidationTranslationReturnValue;
