import { IHttpService } from '@/common/services';
import { DI_CONSTANTS } from '@/di/constants';
import { IFileManagerRepository } from '@/domain';
import { inject, injectable } from 'inversify';

@injectable()
export class FileManagerRepository implements IFileManagerRepository {
  @inject(DI_CONSTANTS.HttpService)
  private readonly httpService: IHttpService;

  uploadFile = async (file: File, percentageCallback: (percent: number) => void): Promise<string> => {
    const formData = new FormData();

    formData.append('File', file);

    return await this.httpService.post<string, {}, {}>({
      url: '/',
      config: {
        onUploadProgress: (progressEvent: ProgressEvent) => {
          const totalLength: number = progressEvent.total;

          percentageCallback(Math.round((progressEvent.loaded * 100) / totalLength));
        },
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      },
      body: formData
    });
  };
}
