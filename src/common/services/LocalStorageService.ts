import { injectable } from 'inversify';
import { StorageService } from './StorageService';

@injectable()
export class LocalStorageService extends StorageService {
  protected api = localStorage;
}
