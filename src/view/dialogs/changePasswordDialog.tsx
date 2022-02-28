import { UseTranslationReturnValue } from '@/view';
import { dialog, Icons } from '@atom/design-system';
export interface ChangePasswordDialogProperties {
  t: UseTranslationReturnValue;
  onSubmit: (cancelFn: () => void) => void;
  column: any[];
}
export const showChangePasswordDialog = ({ t, onSubmit, column }: ChangePasswordDialogProperties) => {
  dialog.acceptionDialog({
    title: t.get('block'),
    description: (
      <>
        {t.get('changePasswordDescriptionFirstPart')}
        <strong>
          {Array.isArray(column) ? (
            column.length
          ) : (
            <>
              "{t.get('id')}:{column}"
            </>
          )}
        </strong>

        {Array.isArray(column)
          ? t.get('multipleChangePasswordDescriptionLastPart')
          : t.get('userBlockDescriptionLastPart')}
      </>
    ),
    cancelButtonText: t.get('cancel'),
    submitButtonText: t.get('block'),
    icon: <Icons.UnBlockPopupIcon />,
    onSubmit
  });
};
