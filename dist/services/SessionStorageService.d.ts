import { StorageService } from './StorageService';
export declare class SessionStorageService extends StorageService {
    protected api: Storage;
    constructor(prefix?: string);
}
