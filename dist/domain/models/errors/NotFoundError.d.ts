import { BaseError } from './BaseError';
import { ErrorVariants } from './ErrorVariants';
export declare class NotFoundError extends BaseError {
    constructor(name: any, errorVariant?: ErrorVariants);
}
