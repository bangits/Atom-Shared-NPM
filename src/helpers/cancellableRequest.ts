import axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse, Canceler, CancelTokenStatic } from 'axios';
import { Observable, Subject } from 'rxjs';

export interface CancellableRequest<T> {
  observable: Observable<T>;
  prevent: Canceler;
}

export class CancellableRequestApi {
  private cancelToken: CancelTokenStatic = axios.CancelToken;

  request<T>(configs: AxiosRequestConfig): CancellableRequest<AxiosResponse<T>> {
    const subject = new Subject<AxiosResponse<T>>();

    const cancelTokenSource = this.cancelToken.source();

    const configsWithAbort = configs || {};

    configsWithAbort.cancelToken = cancelTokenSource.token;

    (axios(configs) as AxiosPromise<T>)
      .then((data) => {
        subject.next(data);
        subject.complete();
      })
      .catch((error) => subject.error(error));

    return {
      observable: subject.asObservable(),
      prevent: cancelTokenSource.cancel
    };
  }

  testForCI() {}
}
