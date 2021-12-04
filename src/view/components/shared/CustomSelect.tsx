import { useTranslation } from '@/view';
import { Select, SelectProps } from '@atom/design-system';

export { SelectOptionType } from '@atom/design-system';

export type CustomSelectProps = SelectProps<any, any, any>;

export function CustomSelect(props: CustomSelectProps) {
  const t = useTranslation();

  return (
    <>
      <Select {...props} selectAllLabel={t.get('form.all')} />
    </>
  );
}
