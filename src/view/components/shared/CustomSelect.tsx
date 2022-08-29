import { useTranslation } from '@/view';
import { Select, SelectProps } from '@atom/design-system';

export { SelectOptionType } from '@atom/design-system';

export type CustomSelectProps = SelectProps<any, any, any>;

export const CustomSelect = (props: CustomSelectProps) => {
  const t = useTranslation();

  return (
    <>
      <Select
        clearButtonLabel={t.get('clear')}
        applyButtonLabel={t.get('apply')}
        selectAllLabel={t.get('all')}
        dropdownSearchPlaceholder={t.get('search')}
        {...props}
      />
    </>
  );
};
