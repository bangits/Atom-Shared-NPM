import { UseTranslationReturnValue } from '@/view';
import { dialog } from '@atom/design-system';

export interface CustomFormDialogProperties {
  t: UseTranslationReturnValue;
  onSubmit: (cancelFn: () => void) => void;
}

export const keepChangesDialog = ({ t, onSubmit }: CustomFormDialogProperties) => {
  dialog.acceptionDialog({
    title: t.get('Warning!'),
    description: <>{t.get('Are You sure You want to leave?')}</>,
    cancelButtonText: t.get('no'),
    submitButtonText: t.get('yes'),
    icon: null,
    onSubmit
  });
};
