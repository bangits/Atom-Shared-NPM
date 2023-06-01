import { PrimaryKey } from '@/domain';
import { UseTranslationReturnValue } from '@atom/common';
import { dialog, Icons } from '@atom/design-system';

export interface DeleteDialogColumn {
  id: PrimaryKey;
  name: string;
}

export interface DeleteDialogProps {
  t: UseTranslationReturnValue;
  column: DeleteDialogColumn | DeleteDialogColumn[];
  label: string;
  pluralLabel: string;
  onSubmit: (cancelFn: () => void) => void;
}

export const deleteDialog = ({ t, column, pluralLabel, label, onSubmit }: DeleteDialogProps) => {
  dialog.acceptionDialog({
    title: t.get('activate'),
    description: (
      <>
        {t.get('doYouWantToDelete')}

        <strong> {Array.isArray(column) ? column.length : `"${column.name}"`} </strong>

        {Array.isArray(column) ? pluralLabel.toLowerCase() : label.toLowerCase()}
      </>
    ),
    cancelButtonText: t.get('cancel'),
    submitButtonText: t.get('delete'),
    icon: <Icons.DeletePopupIcon />,
    onSubmit
  });
};
