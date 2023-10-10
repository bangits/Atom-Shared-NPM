import { ReactElement } from 'react';

export type FormHeaderActionsType<Model> = {
  isEdit: boolean;
  onEdit?: () => void;
  onClose?: () => void;
};

export type FormHeaderType = {
  title?: string;
  tooltip?: string;
  removeEditIcon?: boolean;
  editIconTooltip?: string;
  closeIconTooltip?: string;
  submitIconTooltip?: string;
  editIconComponent?: ({ onEdit, tooltip }: { onEdit: () => void; tooltip: string }) => ReactElement;
  closeIconComponent?: ({ onClose, tooltip }: { onClose: () => void; tooltip: string }) => ReactElement;
  submitIconComponent?: ({ tooltip }: { tooltip: string }) => ReactElement;
};
