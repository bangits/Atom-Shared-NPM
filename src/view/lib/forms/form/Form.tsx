import { useCallback, useEffect } from 'react';
import { DefaultValues, ValidationMode, useForm, FormProvider, FieldErrors, UseFormReturn } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormFieldTypes, FormFields } from '../fractions';
import { FormButtonActions, FormButtonActionsTypes } from '../fractions/formButtonActions';
import { FormTitle, FormTitleTypes } from '../fractions/formTitle';
import { css } from 'styled-system/css';

export type FormType<Model> = {
  validationSchema: any;
  fields: FormFieldTypes<Model>;
  defaultValues: DefaultValues<Model>;
  validationMode: keyof ValidationMode;
  actions: FormButtonActionsTypes;
  title: FormTitleTypes;
  onSubmit: (values: Model, methods: UseFormReturn<Model>, areValuesSameAsDefaultValues: boolean) => void;
  onError?: (errors: FieldErrors<Model>) => void;
  onInit?: (methods: UseFormReturn<Model>) => void;
};

export const Form = <Model,>({
  validationSchema,
  defaultValues,
  validationMode,
  fields,
  actions,
  title,
  onInit,
  onSubmit,
  onError
}: FormType<Model>) => {
  const methods = useForm({
    defaultValues,
    mode: validationMode,
    resolver: yupResolver(validationSchema)
  });

  const { handleSubmit } = methods;

  const successSubmit = useCallback(
    (values: Model) => {
      const areValuesSameAsDefaultValues = values && JSON.stringify(values) === JSON.stringify(defaultValues);
      onSubmit(values, methods, areValuesSameAsDefaultValues);
    },
    [defaultValues]
  );

  const failedSubmit = useCallback((errors: FieldErrors<Model>) => {
    onError?.(errors);
  }, []);

  useEffect(() => onInit?.(methods));

  return (
    <form
      className={css({
        bg: 'white',
        padding: '4rem',
        borderRadius: '1.6rem',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 4px 0px'
      })}
      onSubmit={handleSubmit(successSubmit, failedSubmit)}>
      <FormTitle {...title} />
      <FormProvider {...methods}>
        <FormFields fields={fields} />
      </FormProvider>
      <FormButtonActions {...actions} />
    </form>
  );
};
