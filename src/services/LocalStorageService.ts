import { StorageService } from './StorageService';

export class LocalStorageService extends StorageService {
  protected api = localStorage;

  constructor(prefix?: string) {
    super(prefix);
  }
}
