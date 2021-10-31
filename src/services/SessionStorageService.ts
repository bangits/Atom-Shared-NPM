import { StorageService } from './StorageService';

export class SessionStorageService extends StorageService {
  protected api = sessionStorage;

  constructor(prefix?: string) {
    super(prefix);
  }
}
