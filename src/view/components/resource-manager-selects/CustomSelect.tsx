// @ts-ignore
import { Select, SelectProps } from '@atom/design-system';

export type CustomSelectProps = SelectProps;

export const CustomSelect = (props: SelectProps) => {
  return (
    <>
      <Select {...props} />
    </>
  );
};
