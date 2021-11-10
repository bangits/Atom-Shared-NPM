import { ErrorVariants } from './ErrorVariants';
export declare class BaseError extends Error {
    readonly name: string;
    readonly errorVariant: ErrorVariants;
    constructor(name: string, errorVariant: ErrorVariants, description?: string);
}
