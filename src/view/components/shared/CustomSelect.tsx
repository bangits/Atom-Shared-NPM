import { SELECT_CONFIGS } from '@/configs';
import { useTranslation } from '@/view';
import { Select, SelectProps } from '@atom/design-system';
import { useMemo } from 'react';

export { SelectOptionType } from '@atom/design-system';

export type CustomSelectProps = SelectProps<any, any, any>;

export const CustomSelect = (props: CustomSelectProps) => {
  const t = useTranslation();

  const options = useMemo(
    () => [
      ...(props.selectAll && !props.isMulti
        ? [
            {
              label: t.get('All'),
              value: SELECT_CONFIGS.SINGLE_SELECT_ALL_VALUES,
            },
            ...(props.options || [])
          ]
        : props.options || [])
    ],
    [props.options, props.selectAll, props.isMulti]
  );

  return (
    <>
      <Select
        clearButtonLabel={t.get('clear')}
        // applyButtonLabel={t.get('apply')}
        selectAllLabel={t.get('all')}
        dropdownSearchPlaceholder={t.get('search')}
        options={options}
        {...props}
      />
    </>
  );
};
