import { useFormContext, useWatch } from 'react-hook-form';
import { FormFieldTypes } from './FormFieldTypes';
import { css } from 'styled-system/css';
import { FormFieldVariants } from './FormFieldVariants';

export const FormFields = <T,>({ fields }: { fields: FormFieldTypes<T> }) => {
  const values = useWatch();
  const { control } = useFormContext();

  return (
    <div className={css({ display: 'flex', flexWrap: 'wrap' })}>
      {fields.map(({ variant, name, props, cols, label, visible, wrapper, component }) => {
        if (visible && !visible(values as T)) return;

        return (
          <FormFieldVariants
            variant={variant}
            name={name}
            control={control}
            props={props}
            wrapper={wrapper}
            label={label}
            cols={cols}
            component={component}
          />
        );
      })}
    </div>
  );
};
