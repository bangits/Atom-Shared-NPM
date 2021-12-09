import { IHttpService } from '@/common/services';
import { DI_CONSTANTS } from '@/di/constants';
import { IFileManagerRepository } from '@/domain';
import { inject, injectable } from 'inversify';
import { API_ROUTES } from '..';

@injectable()
export class FileManagerRepository implements IFileManagerRepository {
  @inject(DI_CONSTANTS.FileManagerHttpService)
  private readonly httpService: IHttpService;

  uploadFile = async (file: File, percentageCallback: (percent: number) => void): Promise<string> => {
    const formData = new FormData();

    formData.append('Files', file);

    const uploadedFilesUrls = await this.httpService.post<string[], {}, {}>({
      url: API_ROUTES.FileManager.Upload,
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

    return uploadedFilesUrls[0];
  };
}
