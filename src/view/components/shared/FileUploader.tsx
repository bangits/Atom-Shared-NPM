import { AtomCommonContext } from '@/atom-common';
import { TRANSLATION_CHANGED_VALUE } from '@/configs';
import { useTranslation } from '@/view';
import {
  FileUploader as DesignSystemFileUploader,
  FileUploaderErrors,
  FileUploaderProps as DesignSystemFileUploaderProps
} from '@atom/design-system';
import { FC, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export interface FileUploaderProps
  extends Omit<DesignSystemFileUploaderProps, 'loadingPercent' | 'onError' | 'onChange'> {
  acceptError?: string;
  errorResetDeps?: unknown[];

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

export const FileUploader: FC<FileUploaderProps> = ({
  errorMessage,
  onChange,
  acceptError,
  errorResetDeps = [],
  ...fileUploaderProps
}) => {
  const { fileManagerUseCase } = useContext(AtomCommonContext);

  const [loadingPercent, setLoadingPercent] = useState(0);

  const [uploadedFileError, setUploadedFileError] = useState('');
  const [forceShowUploader, setForceShowUploader] = useState(false);
  console.log('🚀 ~ file: FileUploader.tsx ~ line 41 ~ forceShowUploader', forceShowUploader);

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
    [t, fileUploaderProps, uploadedFileError]
  );

  const onFileChange = useCallback(
    (file: File | null) => {
      setUploadedFileError('');

      if (!file) {
        if (onChange) onChange('');

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

  useEffect(() => {
    if (fileUploaderProps.imageSrc) setLoadingPercent(100);
  }, [fileUploaderProps.imageSrc]);

  useEffect(() => {
    if (!fileUploaderProps.imageSrc) setForceShowUploader(false);
  }, [fileUploaderProps.imageSrc]);

  useEffect(() => {
    setUploadedFileError('');
  }, errorResetDeps);

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
