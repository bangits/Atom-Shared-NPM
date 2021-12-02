import { Select, SelectProps } from '@atom/design-system';
import { useState } from 'react';

export { SelectOptionType } from '@atom/design-system';

export type CustomSelectProps = SelectProps<any, any, any>;

const [value, setValue] = useState<number>();

export function CustomSelect(props: CustomSelectProps) {
  return (
    <>
      <Select value={value} onChange={setValue} {...props} />
    </>
  );
}
