import { injectable } from 'inversify';
import { StorageService } from './StorageService';

@injectable()
export class SessionStorageService extends StorageService {
  protected api = sessionStorage;

  constructor(prefix?: string) {
    super(prefix);
  }
}
