import { StorageService } from './StorageService';
export declare class LocalStorageService extends StorageService {
    protected api: Storage;
    constructor(prefix?: string);
}
