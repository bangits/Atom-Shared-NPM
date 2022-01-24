import { historyService } from '@/atom-common';
import { useTranslation } from '@/view';
import { keepChangesDialog } from '@/view/dialogs';
import { Formik, FormikConfig, FormikHelpers, FormikValues } from 'formik';
import { useEffect, useRef } from 'react';
import { FormikValuesChangeHandler } from './FormikValuesChangeHandler';

export interface CustomFormProps<Values> {
  showKeepChangesModal?: boolean;
  onSubmit: (
    values: Values,
    formikHelpers: FormikHelpers<Values>,
    isValuesSameAsInitialValues: boolean
  ) => void | Promise<any>;
}
export function CustomForm<Values extends FormikValues = FormikValues>(
  props: Omit<FormikConfig<Values>, 'onSubmit'> & CustomFormProps<Values>
) {
  const formValues = useRef(null);

  const t = useTranslation();

  useEffect(() => {
    if (!props.showKeepChangesModal) return;

    const unblock = historyService.block((url) => {
      const isValuesSameAsInitialValues =
        formValues.current && JSON.stringify(formValues.current) === JSON.stringify(props.initialValues);

      if (isValuesSameAsInitialValues) return false;

      keepChangesDialog({
        t,
        onSubmit: () => historyService.redirectToURL(url)
      });

      return true;
    });

    return () => {
      unblock();
    };
  }, [props.initialValues]);

  console.log('initialValues', props.initialValues);
  

  return (
    <Formik
      {...props}
      onSubmit={(...args) => {
        console.log(formValues.current, props.initialValues)
        const isValuesSameAsInitialValues =
          formValues.current && JSON.stringify(formValues.current) === JSON.stringify(props.initialValues);

        props.onSubmit(...args, isValuesSameAsInitialValues);
      }}>
      {(...args) => (
        <>
          {typeof props.children === 'function' ? props.children(...args) : props.children}

          <FormikValuesChangeHandler onChange={(values) => {
            console.log('values', values);
            

            formValues.current = values
          }} />
        </>
      )}
    </Formik>
  );
}

CustomForm.defaultProps = {
  showKeepChangesModal: false
};
