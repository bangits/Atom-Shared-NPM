export declare abstract class StorageService implements Storage {
    protected prefix?: string;
    protected abstract api: Storage;
    constructor(prefix?: string);
    get length(): number;
    setItem(key: string, value: any): void;
    getItem<T>(key: string): T | null;
    getItem<T>(key: string, otherwise: T): T;
    removeItem(key: string): void;
    clear(): void;
    key(index: number): string;
    private prefixKey;
}
