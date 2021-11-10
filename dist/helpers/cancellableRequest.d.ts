import { AxiosRequestConfig, AxiosResponse, Canceler } from 'axios';
import { Observable } from 'rxjs';
export interface CancellableRequest<T> {
    observable: Observable<T>;
    prevent: Canceler;
}
export declare class CancellableRequestApi {
    private cancelToken;
    request<T>(configs: AxiosRequestConfig): CancellableRequest<AxiosResponse<T>>;
}
