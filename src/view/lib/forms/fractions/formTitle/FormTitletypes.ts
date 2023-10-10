import { Typography } from '@atom/design-system';
import { ReactNode, ComponentProps } from 'react';

export type FormTitleTypes = {
  text: ReactNode;
  alignment?: 'start' | 'center' | 'end';
  titleProps?: ComponentProps<typeof Typography>;
};
