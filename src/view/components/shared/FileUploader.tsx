import { AtomCommonContext } from '@/atom-common';
import { useTranslation } from '@/view';
import {
  FileUploader as DesignSystemFileUploader,
  FileUploaderErrors,
  FileUploaderProps as DesignSystemFileUploaderProps
} from '@atom/design-system';
import { FC, useCallback, useContext, useMemo, useState } from 'react';

export interface FileUploaderProps
  extends Omit<DesignSystemFileUploaderProps, 'loadingPercent' | 'onError' | 'onChange'> {
  onChange?(url: string): void;
}

export const FileUploader: FC<FileUploaderProps> = ({ errorMessage, onChange, ...fileUploaderProps }) => {
  const { fileManagerUseCase } = useContext(AtomCommonContext);

  const [loadingPercent, setLoadingPercent] = useState(0);

  const [uploadedFileError, setUploadedFileError] = useState('');
  const [forceShowUploader, setForceShowUploader] = useState(false);

  const t = useTranslation();

  const errorMessagesTranslationConfig = useMemo<Record<FileUploaderErrors, string>>(
    () => ({
      [FileUploaderErrors.MIN_SIZE]: 'Min size',
      [FileUploaderErrors.MAX_SIZE]: 'Max size',
      [FileUploaderErrors.MAX_HEIGHT]: 'Max height',
      [FileUploaderErrors.MAX_WIDTH]: 'Max width',
      [FileUploaderErrors.MIN_HEIGHT]: 'Max height',
      [FileUploaderErrors.MIN_WIDTH]: 'Min width',
      [FileUploaderErrors.TYPE]: 'Type'
    }),
    [t]
  );

  const onFileChange = useCallback(
    (file: File | null) => {
      setUploadedFileError('');

      if (onChange) onChange('');

      if (!file) return;

      setForceShowUploader(true);

      setLoadingPercent(0);

      fileManagerUseCase
        .uploadFile(file, setLoadingPercent)
        .then((fileUrl) => {
          if (onChange) onChange(fileUrl);
        })
        .catch(() => {
          setUploadedFileError('Server error');

          setForceShowUploader(false);
        });
    },
    [onChange]
  );

  return (
    <>
      <DesignSystemFileUploader
        {...fileUploaderProps}
        loadingPercent={loadingPercent}
        onError={(error) => setUploadedFileError(errorMessagesTranslationConfig[error.type])}
        onChange={onFileChange}
        errorMessage={uploadedFileError || errorMessage}
        indicatorColor={uploadedFileError || errorMessage ? 'danger' : 'success'}
        forceShowUploader={forceShowUploader}
      />
    </>
  );
};
