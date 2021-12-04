import { ErrorVariants } from './ErrorVariants';

export class BaseError extends Error {
  public readonly name: string;
  public readonly errorVariant: ErrorVariants;

  constructor(name: string, errorVariant: ErrorVariants, description?: string) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype);

    this.name = name;
    this.errorVariant = errorVariant;
  }
}
