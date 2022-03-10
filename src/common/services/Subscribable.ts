import { injectable } from 'inversify';

@injectable()
export class Subscribable<T> {
  public latestValue: T;

  private subscribers: Set<(msg: T) => void> = new Set();

  subscribe = (cb: (msg: T) => void): (() => void) => {
    this.subscribers.add(cb);
    return () => {
      this.subscribers.delete(cb);
    };
  };

  publish = (msg: T): void => {
    this.subscribers.forEach((cb) => cb(msg));

    this.latestValue = msg;
  };
}
