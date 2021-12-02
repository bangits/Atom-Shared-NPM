import { ObjectMock } from '@/common/types';
import { useTranslation } from '@/view';
import { DataTable, DataTableProps } from '@atom/design-system';
import { useMemo } from 'react';

export interface TablePageProps<T extends ObjectMock, K> extends DataTableProps<T, K> {
  filterProps: Omit<DataTableProps<T, K>['filterProps'], 'resultLabel' | 'applyLabel' | 'clearLabel'>;
  rowCount: number;
  defaultPageSizeValue?: number;
  pageSizeDividerValue?: number;
  isEmpty?: boolean;
}

export const TablePage = <T extends ObjectMock, K>({
  defaultPageSizeValue = 20,
  pageSizeDividerValue = 20,
  isEmpty = false,
  ...props
}: TablePageProps<T, K>) => {
  const translations = useTranslation();

  const filterProps = useMemo(
    () => ({
      ...props.filterProps,
      // resultLabel: props.rowCount
      //   ? translations.get('tables.resultLabel').replace(VALIDATION_CHANGED_VALUE, props.rowCount.toString())
      //   : null,
      applyLabel: translations.get('tables.apply'),
      clearLabel: translations.get('tables.clear')
    }),
    [translations, props.filterProps, props.rowCount]
  );

  const pageSizeOptions = useMemo(
    () =>
      props.rowCount
        ? new Array(Math.ceil(props.rowCount / pageSizeDividerValue)).fill(null).map((_, index) => ({
            value: (index + 1) * pageSizeDividerValue,
            label: ((index + 1) * pageSizeDividerValue).toString()
          }))
        : [],
    [pageSizeDividerValue, props.rowCount]
  );

  return (
    <>
      <DataTable
        {...props}
        paginationProps={{
          pageSizeSelect: {
            dropdownLabel: translations.get('tables.pagination.pageSizeLabel'),
            options: pageSizeOptions,
            defaultValue: defaultPageSizeValue
          },
          totalPagesCount: props.rowCount,
          jumpToPage: {
            inputTitle: translations.get('tables.pagination.jumpToPageLabel')
          },
          getTotalCountInfo: (pagination) =>
            `${pagination.pageSize - pageSizeDividerValue + 1}-${
              pagination.pageSize > props.rowCount ? props.rowCount : pagination.pageSize
            } ${translations.get('tables.pagination.totalCountDivider')} ${props.rowCount}`
        }}
        filterProps={filterProps}
      />
    </>
  );
};
