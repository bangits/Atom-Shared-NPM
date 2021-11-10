interface ForeachCallback<T> {
    cb: (value: T, index: number, array: T[]) => void;
}
export declare const asyncForeach: <T>(arr: T[], cb: (value: T, index: number, array: T[]) => void) => Promise<void>;
export {};
