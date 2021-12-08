export interface IFileManagerRepository {
  uploadFile(file: File, percentageCallback: (percent: number) => void): Promise<string>;
}
