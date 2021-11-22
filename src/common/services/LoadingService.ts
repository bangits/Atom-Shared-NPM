import { Subscribable } from './Subscribable';

export class LoadingService extends Subscribable<boolean> {}

export const loadingService = new LoadingService();
