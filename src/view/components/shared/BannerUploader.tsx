import { AtomCommonContext, convertBase64ToFile, optimizeBase64 } from '@/atom-common';
import { useTranslation } from '@/view';
import {
  BannerUploader as DesignSystemBannerUploader,
  BannerUploaderProps as DesignSystemBannerUploaderProps
} from '@atom/design-system';
import { FC, useContext } from 'react';

export interface BannerUploaderProps {
  onChange: (imageSrc: string) => void;
  minCropBoxHeight?: number;
  minCropBoxWidth?: number;
  aspectRatio?: number;
  initialImage?: string;
  accept?: string;
  title: string;
  children: DesignSystemBannerUploaderProps['children'];
}

export const BannerUploader: FC<BannerUploaderProps> = ({
  onChange,
  minCropBoxHeight,
  minCropBoxWidth,
  initialImage,
  title,
  children,
  aspectRatio,
  accept
}) => {
  const { fileManagerUseCase } = useContext(AtomCommonContext);

  const t = useTranslation();

  return (
    <>
      <DesignSystemBannerUploader
        uploadedImage={initialImage}
        minCropBoxHeight={minCropBoxHeight}
        minCropBoxWidth={minCropBoxWidth}
        translations={{
          upload: t.get('upload'),
          edit: t.get('edit'),
          pleaseUploadThePhoto: t.get('pleaseUploadThePhoto'),
          title,
          save: t.get('save'),
          rotate: t.get('rotate'),
          remove: t.get('remove'),
          cancel: t.get('cancel')
        }}
        onDelete={() => onChange(null)}
        onSave={async (base64Source) => {
          const optimizedBase64 = await optimizeBase64(base64Source);

          const file = await convertBase64ToFile(optimizedBase64);

          fileManagerUseCase
            .uploadFile(file, console.log)
            .then(onChange)
            .catch(() => {
              // setUploadedFileError(t.get('fileUploader.serverError'));
              // setForceShowUploader(false);
            });
        }}
        aspectRatio={aspectRatio}
        accept={accept}>
        {children}
      </DesignSystemBannerUploader>
    </>
  );
};
