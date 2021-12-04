import { FieldProps } from 'formik';
import { FormikFieldTypes } from '../types';

export const createRenderInputs =
  (defaultField: FormikFieldTypes) =>
  (
    Component: (props: any) => JSX.Element,
    name: string,
    fieldType: string,
    fieldProps: { field: FormikFieldTypes }
  ) => {
    const { field } = fieldProps || {};

    const Field = field || defaultField;

    return (
      <Field name={name}>
        {({ field, meta, form }: FieldProps) => {
          return (
            <>
              <Component
                {...field}
                onChange={async (evt) => {
                  await form.setFieldValue(name, (fieldType === 'input' || fieldType === 'radio') ? evt.target.value : evt);
                  form.setFieldTouched(name, true);
                }}
                name={name}
                explanation={meta.touched && meta.error}
                color={meta.error && meta.touched ? 'danger' : undefined}
              />
            </>
          );
        }}
      </Field>
    );
  };
