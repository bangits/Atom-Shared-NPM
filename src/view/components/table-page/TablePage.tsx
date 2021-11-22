import { ObjectMock } from '@/common/types';
import { VALIDATION_CHANGED_VALUE } from '@/configs/constants';
import { useTranslation } from '@/view';
import { DataTable, DataTableProps } from '@atom/design-system';
import { useMemo } from 'react';

export interface TablePageProps<T extends ObjectMock, K> extends DataTableProps<T, K> {
  filterProps: Omit<DataTableProps<T, K>['filterProps'], 'resultLabel' | 'applyLabel' | 'clearLabel'>;
  rowCount?: number;
}

export const TablePage = <T extends ObjectMock, K>(props: TablePageProps<T, K>) => {
  const translations = useTranslation();

  const filterProps = useMemo(
    () => ({
      ...props.filterProps,
      resultLabel: props.rowCount
        ? translations.get('tables.resultLabel').replace(VALIDATION_CHANGED_VALUE, props.rowCount.toString())
        : null,
      applyLabel: translations.get('tables.apply'),
      clearLabel: translations.get('tables.clear')
    }),
    [translations, props.filterProps, props.rowCount]
  );

  return (
    <>
      <DataTable {...props} filterProps={filterProps} />
    </>
  );
};
