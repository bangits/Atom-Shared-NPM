import { FastFieldProps, Field } from 'formik';
import { TelephoneInput as TelephoneInputComponent } from '.';

export interface TelephoneInputFieldProps {
  fullPhoneName: string;
  phoneCodeName: string;
  phoneName: string;
  label: string;
}

export const TelephoneInputField = ({ fullPhoneName, phoneCodeName, phoneName, label }: TelephoneInputFieldProps) => {
  return (
    <Field name={fullPhoneName}>
      {({ form, meta }: FastFieldProps) => {
        return (
          <TelephoneInputComponent
            label={label}
            onChange={async (fullPhoneNumber, phoneCode, phoneWithoutCode) => {
              await form.setFieldValue(fullPhoneName, fullPhoneNumber);
              await form.setFieldTouched(fullPhoneName, true);

              await form.setFieldValue(phoneCodeName, phoneCode);
              await form.setFieldValue(phoneName, phoneWithoutCode);
            }}
            onBlur={() => form.setFieldTouched(fullPhoneName, true)}
            phoneCodeDefaultValue={form.values[phoneCodeName]}
            phoneDefaultValue={form.values[phoneName]}
            error={
              meta.touched &&
              (meta.error || form.getFieldMeta(phoneCodeName).error || form.getFieldMeta(phoneName).error)
            }
          />
        );
      }}
    </Field>
  );
};
