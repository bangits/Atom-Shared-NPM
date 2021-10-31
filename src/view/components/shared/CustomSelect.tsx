import { Select, SelectProps } from '@atom/design-system';

export type CustomSelectProps = SelectProps<any, any, any>;

export function CustomSelect(props: CustomSelectProps) {
  return (
    <>
      <Select {...props} />
    </>
  );
}
