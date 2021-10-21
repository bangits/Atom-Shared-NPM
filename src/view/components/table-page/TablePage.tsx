import { ObjectMock } from '@/types';
import { useTranslation } from '@/view';
import { DataTable } from '@atom/design-system';
import { DataTableProps } from '@atom/design-system/dist/components/templates/data-table/DataTable';
import { useMemo } from 'react';

export interface TablePageProps<T extends ObjectMock, K> {
  defaultOpened?: boolean;
  isShowedFilters?: boolean;

  fetchData: DataTableProps<T, K>['fetchData'];
  data: DataTableProps<T, K>['tableProps']['data'];
  columns: DataTableProps<T, K>['tableProps']['columns'];
  filters: DataTableProps<T, K>['filterProps']['filters'];

  checkboxFilters: DataTableProps<T, K>['filterProps']['checkboxFilters'];
  initialFilterValues: DataTableProps<T, K>['filterProps']['initialValues'];
}

export const TablePage = <T extends ObjectMock, K>({
  data,
  columns,
  filters,
  checkboxFilters,
  initialFilterValues,
  isShowedFilters,
  defaultOpened,
}: TablePageProps<T, K>) => {
  const translations = useTranslation();

  const tableProps = useMemo(
    () => ({
      data,
      columns
    }),
    [data, columns]
  );

  const filtersProps = useMemo(
    () => ({
      filters,
      defaultOpened,
      checkboxFilters,
      initialValues: initialFilterValues,
      resultLabel: translations.get('resultLabel'),
      applyLabel: translations.get('apply'),
      clearLabel: translations.get('clear')
    }),
    [translations, filters, defaultOpened, checkboxFilters, initialFilterValues]
  );

  return (
    <div>
      {/* @ts-ignore */}
      <DataTable isShowedFilters={isShowedFilters} tableProps={tableProps} filtersProps={filtersProps} />
    </div>
  );
};
