import { CustomSelectProps, SelectOptionType } from '@/view';
import { FormikFieldTypes } from '@/view/types';
import { FastField as FormikFastField, Field as FormikField, FieldProps, FormikProps } from 'formik';
import { useState } from 'react';

export interface ChangedSelectProps extends Partial<CustomSelectProps> {
  field: FormikFieldTypes;
  useFastField?: boolean;
  name: string;
  component(props: Partial<CustomSelectProps>): JSX.Element;
  onChangeOptions?(options: SelectOptionType[], form: FormikProps<any>): void;
}

export const ChangedSelect = ({
  name,
  component: Component,
  onChangeOptions,
  field,
  useFastField = true,
  ...props
}: ChangedSelectProps) => {
  const Field = field || (useFastField ? FormikFastField : FormikField);

  const [selectedOptions, setSelecetedOptions] = useState<SelectOptionType[]>([]);

  return (
    <Field name={name}>
      {({ field, meta, form }: FieldProps) => {
        return (
          <>
            <Component
              {...field}
              name={name}
              explanation={meta.touched && meta.error}
              color={meta.error && meta.touched ? 'danger' : undefined}
              onChange={(updatedOptions, event) => {
                form.setFieldValue(name, updatedOptions);
                form.setFieldTouched(name, true);

                const changedOptions: SelectOptionType[] =
                  event.action === 'select-option'
                    ? [...selectedOptions, event.option as SelectOptionType]
                    : selectedOptions.filter((o) => o.value !== (event.option as SelectOptionType).value);

                setSelecetedOptions(changedOptions);

                if (onChangeOptions) onChangeOptions(changedOptions, form);
              }}
              {...props}
            />
          </>
        );
      }}
    </Field>
  );
};
