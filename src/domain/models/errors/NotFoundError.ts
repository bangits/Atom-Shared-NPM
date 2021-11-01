import { BaseError } from './BaseError';
import { ErrorVariants } from './ErrorVariants';

export class NotFoundError extends BaseError {
  constructor(name, errorVariant = ErrorVariants.NOT_FOUND) {
    super(name, errorVariant);
  }
}
