import { useFormikContext } from 'formik';
import { FC, useEffect } from 'react';

interface FormikValuesChangeHandlerProps {
  onChange: (data: any) => void;
}

export const FormikValuesChangeHandler: FC<FormikValuesChangeHandlerProps> = ({ onChange }) => {
  const form = useFormikContext();

  useEffect(() => {
    onChange(form.values);
  }, [form.values]);

  return null;
};
