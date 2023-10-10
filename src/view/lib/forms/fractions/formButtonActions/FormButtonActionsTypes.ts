import { ButtonProps } from '@atom/design-system';
import { ReactElement } from 'react';

export type FormButtonActionsTypes = {
  alignment?: 'start' | 'center' | 'end';
  submitProps?: ButtonProps;
  removeCancel?: boolean;
  cancelProps?: ButtonProps;
  component?: () => ReactElement;
};
