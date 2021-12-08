import { IFileManagerRepository } from '@/atom-common';
import { DI_CONSTANTS } from '@/di/constants';
import { inject, injectable } from 'inversify';

@injectable()
export class FileManagerUseCase {
  @inject(DI_CONSTANTS.FileManagerRepository)
  private readonly fileManagerRepository: IFileManagerRepository;

  uploadFile = async (file: File, percentageCallback: (percent: number) => void): Promise<string> => {
    return await this.fileManagerRepository.uploadFile(file, percentageCallback);
  };
}
