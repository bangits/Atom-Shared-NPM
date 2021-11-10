declare class EnviromentService {
    private env;
    constructor();
    get<T>(key: string): T;
}
export declare const enviromentService: EnviromentService;
export {};
