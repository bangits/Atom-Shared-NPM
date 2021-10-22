import { Container } from 'inversify';
export declare type DiConfig = {
    modulePath: string;
    moduleName: string;
};
export declare type DiFiles = {
    module: any;
    name: string;
};
export declare class DiContainer {
    diContainer: Container;
    diFiles: DiFiles[];
    configure: (diConfigs: DiConfig[]) => Promise<void>;
}
