import { useLoading, useTranslation } from '@/view';
import { DataTable, DataTableProps } from '@atom/design-system';
import { useEffect, useMemo } from 'react';

export interface TablePageProps<T extends {}, K> extends Omit<DataTableProps<T, K>, 'paginationProps'> {
  filterProps: Omit<DataTableProps<T, K>['filterProps'], 'resultLabel' | 'applyLabel' | 'clearLabel'>;
  rowCount: number;
  defaultPageSizeValue?: number;
  pageSizeDividerValue?: number;
  isEmpty?: boolean;
  isFetching?: boolean;
  isFilteredData?: boolean;
}

export const TablePage = <T extends {}, K>({
  defaultPageSizeValue = 20,
  pageSizeDividerValue = 50,
  isEmpty = false,
  isFetching,
  isFilteredData,
  ...props
}: TablePageProps<T, K>) => {
  const translations = useTranslation();

  const changeLoading = useLoading();

  const filterProps = useMemo(
    () => ({
      ...props.filterProps,
      // resultLabel: props.rowCount
      //   ? translations.get('tables.resultLabel').replace(TRANSLATION_CHANGED_VALUE, props.rowCount.toString())
      //   : null,
      applyLabel: translations.get('tables.apply'),
      clearLabel: translations.get('tables.clear')
    }),
    [translations, props.filterProps, props.rowCount]
  );

  const pageSizeOptions = useMemo(
    () => [
      {
        value: defaultPageSizeValue,
        label: defaultPageSizeValue.toString()
      },
      ...(props.rowCount
        ? new Array(Math.ceil(props.rowCount / pageSizeDividerValue)).fill(null).map((_, index) => ({
            value: (index + 1) * pageSizeDividerValue,
            label: ((index + 1) * pageSizeDividerValue).toString()
          }))
        : [])
    ],
    [pageSizeDividerValue, props.rowCount]
  );

  const tableProps = useMemo(
    () => ({
      ...(props.tableProps || {}),
      emptyValue: translations.get('tables.emptyValue')
    }),
    [props.tableProps]
  );

  useEffect(() => {
    if (!isFilteredData) changeLoading(true);
  }, []);

  useEffect(() => {
    if (!isFetching) changeLoading(false);
  }, [isFetching]);

  if (isFetching && !isFilteredData) return null;

  return (
    <>
      <DataTable
        {...props}
        isShowedPagination={props.rowCount > defaultPageSizeValue}
        rowCount={props.rowCount}
        paginationProps={{
          pageSizeSelect: {
            dropdownLabel: translations.get('tables.pagination.pageSizeLabel'),
            options: pageSizeOptions,
            defaultValue: defaultPageSizeValue
          },
          jumpToPage: {
            inputTitle: translations.get('tables.pagination.jumpToPageLabel')
          },
          getTotalCountInfo: (pagination) => {
            const currentPageFirstValue = pagination.pageSize * pagination.page - pagination.pageSize + 1;

            const currentPageLastValue =
              pagination.pageSize * pagination.page > props.rowCount
                ? props.rowCount
                : pagination.pageSize * pagination.page;

            return `${currentPageFirstValue}-${currentPageLastValue} ${translations.get(
              'tables.pagination.totalCountDivider'
            )} ${props.rowCount}`;
          }
        }}
        filterProps={filterProps}
        tableProps={tableProps}
      />
    </>
  );
};
