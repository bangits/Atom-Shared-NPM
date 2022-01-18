import { historyService } from '@/atom-common';
import { Formik, FormikConfig, FormikValues } from 'formik';
import { useEffect } from 'react';

export interface CustomFormProps {
  showKeepChangesModal?: boolean;
}
export function CustomForm<Values extends FormikValues = FormikValues>(props: FormikConfig<Values> & CustomFormProps) {
  useEffect(() => {
    if (!props.showKeepChangesModal) return;

    historyService.block(() => true)
    // window.history.listen((location) => {
    //   if (location.pathname !== '/')
    //     keepChangesDialog({
    //       onSubmit: () => historyService.redirectToURL(location.pathname)
    //     });
    // });
  }, []);

  return <Formik {...props}>

  </Formik>;
}
