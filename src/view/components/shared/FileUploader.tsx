import { AtomCommonContext } from '@/atom-common';
import { TRANSLATION_CHANGED_VALUE } from '@/configs';
import { useTranslation } from '@/view';
import {
  FileUploader as DesignSystemFileUploader,
  FileUploaderErrors,
  FileUploaderProps as DesignSystemFileUploaderProps
} from '@atom/design-system';
import { FC, useCallback, useContext, useMemo, useState } from 'react';

export interface FileUploaderProps
  extends Omit<DesignSystemFileUploaderProps, 'loadingPercent' | 'onError' | 'onChange'> {
  acceptError?: string;

  onChange?(url: string): void;
}

export const fileUploaderDefaultValues = {
  minWidth: 40,
  maxWidth: 2000,
  minHeight: 40,
  maxHeight: 2000,
  minSize: 0,
  maxSize: 1024 * 1024
};

export const FileUploader: FC<FileUploaderProps> = ({ errorMessage, onChange, acceptError, ...fileUploaderProps }) => {
  const { fileManagerUseCase } = useContext(AtomCommonContext);

  const [loadingPercent, setLoadingPercent] = useState(0);

  const [uploadedFileError, setUploadedFileError] = useState('');
  const [forceShowUploader, setForceShowUploader] = useState(false);

  const t = useTranslation();

  const errorMessagesTranslationConfig = useMemo<Record<FileUploaderErrors, string>>(
    () => ({
      [FileUploaderErrors.MIN_SIZE]: t
        .get('fileUploader.minSize')
        .replace(
          TRANSLATION_CHANGED_VALUE,
          ((fileUploaderProps?.minSize || fileUploaderDefaultValues.minSize) / 1024 / 1024).toString()
        ),
      [FileUploaderErrors.MAX_SIZE]: t
        .get('fileUploader.maxSize')
        .replace(
          TRANSLATION_CHANGED_VALUE,
          ((fileUploaderProps?.maxSize || fileUploaderDefaultValues.maxSize) / 1024 / 1024).toString()
        ),
      [FileUploaderErrors.MIN_HEIGHT]: t
        .get('fileUploader.minHeight')
        .replace(
          TRANSLATION_CHANGED_VALUE,
          (fileUploaderProps?.minHeight || fileUploaderDefaultValues.minHeight).toString()
        ),
      [FileUploaderErrors.MAX_HEIGHT]: t
        .get('fileUploader.maxHeight')
        .replace(
          TRANSLATION_CHANGED_VALUE,
          (fileUploaderProps?.maxHeight || fileUploaderDefaultValues.maxHeight).toString()
        ),
      [FileUploaderErrors.MIN_WIDTH]: t
        .get('fileUploader.minWidth')
        .replace(
          TRANSLATION_CHANGED_VALUE,
          (fileUploaderProps?.minWidth || fileUploaderDefaultValues.minWidth).toString()
        ),
      [FileUploaderErrors.MAX_WIDTH]: t
        .get('fileUploader.maxWidth')
        .replace(
          TRANSLATION_CHANGED_VALUE,
          (fileUploaderProps?.maxWidth || fileUploaderDefaultValues.maxWidth).toString()
        ),
      [FileUploaderErrors.TYPE]: acceptError || t.get('fileUploader.defaultExtensionError')
    }),
    [t]
  );

  const onFileChange = useCallback(
    (file: File | null) => {
      setUploadedFileError('');

      if (onChange) onChange('');

      if (!file) {
        setForceShowUploader(false);

        return;
      }

      setForceShowUploader(true);

      setLoadingPercent(0);

      fileManagerUseCase
        .uploadFile(file, setLoadingPercent)
        .then((fileUrl) => {
          if (onChange) onChange(fileUrl);
        })
        .catch(() => {
          setUploadedFileError(t.get('fileUploader.serverError'));

          setForceShowUploader(false);
        });
    },
    [onChange]
  );

  return (
    <>
      <DesignSystemFileUploader
        {...fileUploaderDefaultValues}
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
