import { PrimaryKey } from '@/domain';
import { UseTranslationReturnValue } from '@atom/common';
import { dialog, Icons } from '@atom/design-system';

export interface DeleteDialogColumn {
  id: PrimaryKey;
}

export interface DeleteDialogProps {
  t: UseTranslationReturnValue;
  column: DeleteDialogColumn | DeleteDialogColumn[];
  label: string;
  pluralLabel: string;
  onSubmit: (cancelFn: () => void) => void;
  key?: PrimaryKey;
}

export const deleteDialog = ({ t, column, pluralLabel, label, onSubmit, key = 'name' }: DeleteDialogProps) => {
  dialog.acceptionDialog({
    title: t.get('delete'),
    description: (
      <>
        {t.get('doYouWantToDelete')}

        <strong> {Array.isArray(column) ? column.length : `"${column[key]}"`} </strong>

        {Array.isArray(column) ? pluralLabel.toLowerCase() : label.toLowerCase()}
      </>
    ),
    cancelButtonText: t.get('cancel'),
    submitButtonText: t.get('delete'),
    icon: <Icons.DeletePopupIcon />,
    onSubmit
  });
};
