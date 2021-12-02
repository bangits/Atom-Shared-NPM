import { Select, SelectProps } from '@atom/design-system';
import { useState } from 'react';

export { SelectOptionType } from '@atom/design-system';

export type CustomSelectProps = SelectProps<any, any, any>;

export function CustomSelect(props: CustomSelectProps) {
  const [value, setValue] = useState<number>();

  return (
    <>
      <Select value={value} onChange={setValue} {...props} />
    </>
  );
}
