export declare class Subscribable<T> {
    private subscribers;
    subscribe(cb: (msg: T) => void): () => void;
    publish(msg: T): void;
}
