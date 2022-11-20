import { FieldProps } from 'formik';
import { FormikFieldTypes } from '../types';

export const createRenderInputs =
  (defaultField: FormikFieldTypes) =>
  (
    Component: (props: any) => JSX.Element,
    name: string,
    fieldType: string,
    fieldProps: { field: FormikFieldTypes; convertToNumber: boolean }
  ) => {
    const { field } = fieldProps || {};

    const Field = field || defaultField;

    return (
      <Field name={name}>
        {({ field, meta, form }: FieldProps) => {
          const { value } = field;

          return (
            <>
              <Component
                {...field}
                onChange={async (evt) => {
                  const value =
                    fieldType === 'single-checkbox'
                      ? evt.target.checked
                      : fieldType === 'input' || fieldType === 'radio' || fieldType === 'field'
                      ? evt.target.value
                      : evt;

                  await form.setFieldValue(name, value && fieldProps?.convertToNumber ? +value : value);
                  form.setFieldTouched(name, true);
                }}
                value={value === 0 && fieldProps?.convertToNumber ? '0' : value}
                name={name}
                explanation={meta.touched && meta.error}
                color={meta.error && meta.touched ? 'danger' : undefined}
                selected={fieldType === 'datepicker' ? field.value : undefined}
              />
            </>
          );
        }}
      </Field>
    );
  };
