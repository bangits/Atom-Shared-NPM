import { ObjectMock } from '@/types';
import { useTranslation } from '@/view';
import { DataTable } from '@atom/design-system';
import { DataTableProps } from '@atom/design-system/dist/components/templates/data-table/DataTable';
import { useMemo } from 'react';

export interface TablePageProps<T extends ObjectMock, K> extends DataTableProps<T, K> {}

export const TablePage = <T extends ObjectMock, K>(props: TablePageProps<T, K>) => {
  const translations = useTranslation();

  const filtersProps = useMemo(
    () => ({
      ...props.filterProps,
      resultLabel: translations.get('resultLabel'),
      applyLabel: translations.get('apply'),
      clearLabel: translations.get('clear')
    }),
    [translations, props.filterProps]
  );

  return (
    <>
      <DataTable filterProps={filtersProps} {...props} />
    </>
  );
};
