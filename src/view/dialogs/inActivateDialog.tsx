import { PrimaryKey } from '@/domain';
import { UseTranslationReturnValue } from '@atom/common';
import { dialog, Icons } from '@atom/design-system';

export interface InActivateDialogColumn {
  id: PrimaryKey;
  name: string;
}

export interface InActivateDialogProperties {
  t: UseTranslationReturnValue;
  column: InActivateDialogColumn | InActivateDialogColumn[];
  label: string;
  pluralLabel: string;
  onSubmit: (cancelFn: () => void) => void;
}

export const showInActivateDialog = ({ t, column, pluralLabel, label, onSubmit }: InActivateDialogProperties) => {
  dialog.acceptionDialog({
    title: t.get('inActivate'),
    description: (
      <>
        {t.get('deActivateDescriptionFirstPart')}

        <strong> {Array.isArray(column) ? column.length : `"${column.name}"`} </strong>

        {Array.isArray(column) ? pluralLabel.toLowerCase() : label.toLowerCase()}
      </>
    ),
    cancelButtonText: t.get('cancel'),
    submitButtonText: t.get('inActivate'),
    icon: <Icons.InActivatePopupIcon />,
    onSubmit
  });
};
