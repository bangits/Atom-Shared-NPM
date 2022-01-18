import { Formik, FormikConfig, FormikValues } from 'formik';

export interface CustomFormProps {
  showKeepChangesModal: boolean;
}

function CustomForm<Values extends FormikValues = FormikValues>(props: FormikConfig<Values> & CustomFormProps) {
  return <Formik {...props} />;
}

export default CustomForm;
