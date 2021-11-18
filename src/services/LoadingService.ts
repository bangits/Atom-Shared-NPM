import { injectable } from 'inversify';
import { Subscribable } from './Subscribable';

@injectable()
export class LoadingService extends Subscribable<boolean> {}
