import { ReactNode } from 'react';
import { FormColsValue } from '../formCols';
import { TagWithImageBaseProps } from '@atom/design-system';

export type FormViewFieldsType = FormViewFieldBase &
  (FormViewFieldDefault | FormViewFieldTag | FormViewFieldTagWithImage | FormViewFieldCustom);

export type FormViewFieldBase = {
  cols: FormColsValue;
  noDataText?: string;
};

export type FormViewFieldDefault = {
  variant: 'default';
  title: ReactNode | string;
  value: string;
  tooltipText?: string;
  labelText?: string;
  onRedirect?: () => void;
};

export type FormViewFieldTag = {
  variant: 'tag';
  title: ReactNode | string;
  showCount?: boolean;
  tooltipText?: string;
  value: string[];
};

export type FormViewFieldTagWithImage = {
  variant: 'tag-with-image';
  title: ReactNode | string;
  showCount?: boolean;
  tooltipText?: string;
  value: TagWithImageBaseProps[];
};

export type FormViewFieldCustom = {
  variant: 'custom';
  title: ReactNode | string;
  tooltipText?: string;
  component: ReactNode;
};
