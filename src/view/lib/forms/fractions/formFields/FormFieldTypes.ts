import { TextInputProps, DatepickerProps, CheckboxWithLabelProps, FileUploaderProps } from '@atom/design-system';
import { ReactElement } from 'react';
import { FormColsType } from '../formCols';
import { FieldError, Noop } from 'react-hook-form';
import { CustomSelectProps } from '@/atom-common';

export type FormFieldTypes<T> = FormFieldType<T>[];

export type FormFieldType<T> =
  | FormFieldBase<T> &
      (
        | FormFieldInput
        | FormFieldSelect
        | FormFieldFileUploader
        | FormFieldDatePicker
        | FormFieldCheckbox
        | FormFieldCustom
      );

export type FormFieldBase<T> = {
  name: keyof T;
  cols: FormColsType;
  label?: string;
  wrapper?: (component: ReactElement) => ReactElement;
  visible?: (values: T) => boolean;
};

export type FormFieldInput = {
  variant: 'input';
  props?: Omit<TextInputProps, 'value' | 'onChange' | 'fillWidth' | 'label'>;
};

export type FormFieldSelect = {
  variant: 'select';
  props?: Omit<CustomSelectProps, 'value' | 'onChange' | 'fillWidth' | 'label' | 'inputLabel'>;
};

export type FormFieldDatePicker = {
  variant: 'date-picker';
  props?: Omit<DatepickerProps, 'value' | 'onChange' | 'fillWidth' | 'placeholderText'>;
};

export type FormFieldCheckbox = {
  variant: 'checkbox';
  props?: Omit<CheckboxWithLabelProps, 'value' | 'onChange' | 'label'>;
};

export type FormFieldFileUploader = {
  variant: 'file-uploader';
  props?: Omit<FileUploaderProps, 'fillWidth' | 'imageSrc' | 'onChange'>;
};

export type FormFieldCustom = {
  variant: 'custom';
  component: ({
    onChange,
    onBlur,
    value,
    error
  }: {
    value: any;
    onBlur: Noop;
    error: FieldError;
    onChange: (...event: any[]) => void;
  }) => ReactElement;
};
