import { UseTranslationReturnValue } from '@/view';
import { dialog, Icons } from '@atom/design-system';

export interface CustomFormDialogProperties {
  t: UseTranslationReturnValue;
  onSubmit: (cancelFn: () => void) => void;
  column: string;
}

export const keepChangesDialog = ({ t, onSubmit, column }: CustomFormDialogProperties) => {
  dialog.acceptionDialog({
    title: t.get('Warning!'),
    description: <>{t.get('Are You sure You want to leave?')}</>,
    cancelButtonText: t.get('no'),
    submitButtonText: t.get('yes'),
    icon: <Icons.CheckPopupIcon />,
    onSubmit
  });
};
