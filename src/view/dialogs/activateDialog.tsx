import { PrimaryKey } from '@/domain';
import { UseTranslationReturnValue } from '@atom/common';
import { dialog, Icons } from '@atom/design-system';

export interface ActivateDialogColumn {
  id: PrimaryKey;
  name: string;
}

export interface ActivateDialogProperties {
  t: UseTranslationReturnValue;
  column: ActivateDialogColumn | ActivateDialogColumn[];
  label: string;
  pluralLabel: string;
  onSubmit: (cancelFn: () => void) => void;
}

export const showActivateDialog = ({ t, column, pluralLabel, label, onSubmit }: ActivateDialogProperties) => {
  dialog.acceptionDialog({
    title: t.get('activate'),
    description: (
      <>
        {t.get('doYouWantToActivate')}
        <strong> {Array.isArray(column) ? column.length : `"${column.name}"`} </strong>
        {Array.isArray(column) ? pluralLabel.toLowerCase() : label.toLowerCase()} ?
      </>
    ),
    cancelButtonText: t.get('cancel'),
    submitButtonText: t.get('activate'),
    icon: <Icons.CheckPopupIcon />,
    onSubmit
  });
};
