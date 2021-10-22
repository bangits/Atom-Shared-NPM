export declare class Subscribable<T> {
    private subscribers;
    constructor();
    subscribe(cb: (msg: T) => void): () => void;
    publish(msg: T): void;
}
