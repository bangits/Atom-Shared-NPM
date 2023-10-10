import { FieldErrors, UseFormReturn, DefaultValues, ValidationMode, useForm, FormProvider } from 'react-hook-form';
import { css } from 'styled-system/css';
import {
  FormHeaderActions,
  FormFieldTypes,
  FormHeaderType,
  FormFields,
  FormViewFieldsType,
  FormViewFields
} from '../fractions';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Card, CardProps } from '@atom/design-system';

export type CardFormType<Model> = {
  viewFields: FormViewFieldsType[];
  validationSchema?: any;
  defaultValues?: DefaultValues<Model>;
  validationMode?: keyof ValidationMode;
  formFields?: FormFieldTypes<Model>;
  customView?: ReactNode;
  customForm?: ReactNode;
  editModeByDefault?: boolean;
  header?: FormHeaderType;
  height?: CardProps['height'];
  onSubmit?: (values: Model, methods: UseFormReturn<Model>, areValuesSameAsDefaultValues: boolean) => void;
  onError?: (errors: FieldErrors<Model>) => void;
  onInit?: (methods: UseFormReturn<Model>) => void;
  onEdit?: () => void;
  onClose?: () => void;
};

const defaultHeight = 200;

export const CardForm = <Model,>({
  validationSchema,
  defaultValues,
  validationMode,
  customView,
  customForm,
  viewFields,
  editModeByDefault,
  header,
  formFields,
  height = defaultHeight,
  onEdit,
  onClose,
  onSubmit,
  onError,
  onInit
}: CardFormType<Model>) => {
  const methods = useForm<Model>({
    defaultValues,
    mode: validationMode,
    resolver: yupResolver(validationSchema)
  });

  const [isEdit, setIsEdit] = useState(editModeByDefault);

  const handleEdit = () => {
    setIsEdit(true);
    onEdit?.();
  };

  const handleClose = () => {
    setIsEdit(false);
    methods.reset();
    onClose?.();
  };

  const successSubmit = useCallback(
    (values: Model) => {
      const areValuesSameAsDefaultValues = values && JSON.stringify(values) === JSON.stringify(defaultValues);
      onSubmit?.(values, methods, areValuesSameAsDefaultValues);
    },
    [defaultValues]
  );

  const failedSubmit = useCallback((errors: FieldErrors<Model>) => {
    onError?.(errors);
  }, []);

  useEffect(() => onInit?.(methods), []);

  return (
    <form
      onSubmit={methods.handleSubmit(successSubmit, failedSubmit)}
      className={css({ width: '100%', boxSizing: 'border-box' })}>
      {header && formFields && (
        <FormHeaderActions {...(header || {})} isEdit={isEdit} onClose={handleClose} onEdit={handleEdit} />
      )}

      {isEdit && (
        <Card height={'auto'}>
          {formFields && <FormProvider {...methods}>{customForm || <FormFields fields={formFields} />}</FormProvider>}
        </Card>
      )}

      {!isEdit && <Card height={height}>{customView || <FormViewFields fields={viewFields} />}</Card>}
    </form>
  );
};
