import { injectable } from 'inversify';

@injectable()
export abstract class StorageService implements Storage {
  protected abstract api: Storage;

  public get length(): number {
    return this.api.length;
  }

  public setItem(key: string, value: any): void {
    this.api.setItem(key, JSON.stringify({ value }));
  }

  public getItem<T>(key: string): T | null;
  public getItem<T>(key: string, otherwise: T): T;
  public getItem<T>(key: string, otherwise?: T): T | null {
    const data: string | null = this.api.getItem(key);

    if (data !== null) {
      return JSON.parse(data).value;
    }

    if (otherwise) {
      return otherwise;
    }

    return null;
  }

  public removeItem(key: string): void {
    this.api.removeItem(key);
  }

  public clear(): void {
    this.api.clear();
  }

  public key(index: number): string {
    return this.api.key(index);
  }
}
