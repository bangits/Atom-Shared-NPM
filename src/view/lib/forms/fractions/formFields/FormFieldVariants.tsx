import { TextInput, DatePicker, CheckboxWithLabel } from '@atom/design-system';
import { Control, Controller, FieldError, FieldValues } from 'react-hook-form';
import { FormCols } from '../formCols';
import { useCallback } from 'react';
import {
  FormFieldBase,
  FormFieldCheckbox,
  FormFieldCustom,
  FormFieldDatePicker,
  FormFieldFileUploader,
  FormFieldInput,
  FormFieldSelect,
  FormFieldType
} from './FormFieldTypes';
import { CustomSelect, FileUploader } from '@/atom-common';

export const FormFieldVariants = <T,>({
  control,
  ...rest
}: FormFieldType<T> & { control: Control<FieldValues, T> }) => {
  const computeError = useCallback((error, variant?: FormFieldType<T>['variant']) => {
    if (variant === 'file-uploader') {
      return error ? { errorMessage: error.message as string } : {};
    }

    return error ? { explanation: error.message as string, color: 'danger' as const } : {};
  }, []);

  let inputProps: FormFieldInput & FormFieldBase<T> = null;
  let selectProps: FormFieldSelect & FormFieldBase<T> = null;
  let datePickerProps: FormFieldDatePicker & FormFieldBase<T> = null;
  let checkboxProps: FormFieldCheckbox & FormFieldBase<T> = null;
  let fileUploaderProps: FormFieldFileUploader & FormFieldBase<T> = null;
  let customProps: FormFieldCustom & FormFieldBase<T> = null;

  switch (rest.variant) {
    case 'input':
      inputProps = rest;
      return (
        <FormCols cols={inputProps.cols}>
          <Controller
            control={control}
            name={inputProps.name as string}
            render={({ field: { onChange, onBlur, value }, formState: { errors } }) => {
              const component = (
                <TextInput
                  fullWidth
                  {...inputProps.props}
                  {...computeError(errors[inputProps.name])}
                  label={inputProps.label}
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                />
              );

              return inputProps.wrapper ? inputProps.wrapper(component) : component;
            }}
          />
        </FormCols>
      );
    case 'select':
      selectProps = rest;
      return (
        <FormCols cols={selectProps.cols}>
          <Controller
            control={control}
            name={selectProps.name as string}
            render={({ field: { onChange, onBlur, value }, formState: { errors } }) => {
              const component = (
                <CustomSelect
                  fullWidth
                  {...selectProps.props}
                  {...computeError(errors[selectProps.name])}
                  inputLabel={selectProps.label}
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                />
              );
              return selectProps.wrapper ? selectProps.wrapper(component) : component;
            }}
          />
        </FormCols>
      );
    case 'date-picker':
      datePickerProps = rest;
      return (
        <FormCols cols={datePickerProps.cols}>
          <Controller
            control={control}
            name={datePickerProps.name as string}
            render={({ field: { onChange, onBlur, value }, formState: { errors } }) => {
              const component = (
                <DatePicker
                  fullWidth
                  {...datePickerProps.props}
                  {...computeError(errors[datePickerProps.name])}
                  placeholderText={datePickerProps.label}
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                />
              );
              return datePickerProps.wrapper ? datePickerProps.wrapper(component) : component;
            }}
          />
        </FormCols>
      );
    case 'checkbox':
      checkboxProps = rest;
      return (
        <FormCols cols={checkboxProps.cols}>
          <Controller
            control={control}
            name={checkboxProps.name as string}
            render={({ field: { onChange, onBlur, value }, formState: { errors } }) => {
              const component = (
                <CheckboxWithLabel
                  {...checkboxProps.props}
                  {...computeError(errors[checkboxProps.name])}
                  label={checkboxProps.label}
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                />
              );
              return checkboxProps.wrapper ? checkboxProps.wrapper(component) : component;
            }}
          />
        </FormCols>
      );
    case 'file-uploader':
      fileUploaderProps = rest;

      return (
        <FormCols cols={fileUploaderProps.cols}>
          <Controller
            control={control}
            name={fileUploaderProps.name as string}
            render={({ field: { onChange, value }, formState: { errors } }) => {
              const component = (
                <FileUploader
                  fullWidth
                  {...fileUploaderProps.props}
                  {...computeError(errors[fileUploaderProps.name], fileUploaderProps.variant)}
                  onChange={onChange}
                  imageSrc={value}
                  labelProps={{
                    text: fileUploaderProps.label,
                    ...(fileUploaderProps.props?.labelProps ? fileUploaderProps.props.labelProps : {})
                  }}
                />
              );

              return fileUploaderProps.wrapper ? fileUploaderProps.wrapper(component) : component;
            }}
          />
        </FormCols>
      );
    case 'custom':
      customProps = rest;

      return (
        <FormCols cols={customProps.cols}>
          <Controller
            control={control}
            name={customProps.name as string}
            render={({ field: { onChange, onBlur, value }, formState: { errors } }) => {
              const element = customProps.component;

              return customProps.wrapper
                ? customProps.wrapper(
                    element({ onChange, onBlur, value, error: errors[customProps.name] as FieldError })
                  )
                : element({ onChange, onBlur, value, error: errors[customProps.name] as FieldError });
            }}
          />
        </FormCols>
      );
  }
};
