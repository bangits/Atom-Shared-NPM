import { redirectToURL } from '@/atom-common';
import { useLoading, useTranslation } from '@/view';
import { DataTable, DataTableProps } from '@atom/design-system';
import { useEffect, useMemo, useState } from 'react';

export interface TablePageProps<T extends {}, K> extends Omit<DataTableProps<T, K>, 'paginationProps'> {
  filterProps: Omit<DataTableProps<T, K>['filterProps'], 'resultLabel' | 'applyLabel' | 'clearLabel'>;
  rowCount: number;
  defaultPageSizeValue?: number;
  pageSizeDividerValue?: number;
  maxViewOrEditColumnsCount?: number;
  isEmpty?: boolean;
  isFetching?: boolean;
  isFilteredData?: boolean;
  getEditUrl?: (column: T) => string;
  getViewUrl?: (column: T) => string;
}

export const TablePage = <T extends {}, K>({
  defaultPageSizeValue = 20,
  pageSizeDividerValue = 50,
  isEmpty = false,
  isFetching,
  isFilteredData,
  getViewUrl,
  getEditUrl,
  maxViewOrEditColumnsCount = 50,
  ...props
}: TablePageProps<T, K>) => {
  const translations = useTranslation();

  const [selectedColumnsLength, setSelectedColumnsLength] = useState(0);

  const changeLoading = useLoading();

  const filterProps = useMemo(
    () => ({
      ...props.filterProps,
      applyLabel: translations.get('apply'),
      clearLabel: translations.get('clear'),
      selectProps: {
        selectAll: true,
        selectAllLabel: translations.get('all'),
        clearButton: true,
        clearButtonLabel: translations.get('clear')
      }
    }),
    [translations, props.filterProps, props.rowCount]
  );

  const pageSizeOptions = useMemo(
    () => [
      {
        value: defaultPageSizeValue,
        label: defaultPageSizeValue.toString()
      },
      {
        value: 50,
        label: '50'
      },
      {
        value: 100,
        label: '100'
      }
      // ...(props.rowCount
      //   ? new Array(Math.ceil(props.rowCount / pageSizeDividerValue)).fill(null).map((_, index) => ({
      //       value: (index + 1) * pageSizeDividerValue,
      //       label: ((index + 1) * pageSizeDividerValue).toString()
      //     }))
      //   : [])
    ],
    [pageSizeDividerValue, props.rowCount]
  );

  const tableProps = useMemo<typeof props.tableProps>(
    () => ({
      ...(props.tableProps || {}),
      emptyValue: translations.get('emptyValue'),
      actions: [
        ...(props.tableProps.actions || []),
        ...(getViewUrl && selectedColumnsLength <= maxViewOrEditColumnsCount
          ? [
              {
                iconName: 'ViewIcon' as const,
                onClick: (columns) => {
                  if (Array.isArray(columns)) {
                    columns.forEach((c) => window.open(getViewUrl(c), '_blank'));
                  } else redirectToURL(getViewUrl(columns));
                },
                tooltipText: translations.get('view')
              }
            ]
          : []),
        ...(getEditUrl && selectedColumnsLength <= maxViewOrEditColumnsCount
          ? [
              {
                iconName: 'EditIcon' as const,
                onClick: (columns) => {
                  if (Array.isArray(columns)) {
                    columns.forEach((c) => window.open(getEditUrl(c), '_blank'));
                  } else redirectToURL(getEditUrl(columns));
                },
                tooltipText: translations.get('edit')
              }
            ]
          : [])
      ],
      onSelectedColumnsChange: (columns) => setSelectedColumnsLength(columns.length)
    }),
    [props.tableProps, getViewUrl, getEditUrl, selectedColumnsLength]
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
        rowCount={props.rowCount}
        filtersDropdownProps={{
          selectAll: true,
          selectAllLabel: translations.get('all'),
          clearButton: true,
          clearButtonLabel: translations.get('clear'),
          color: 'primary'
        }}
        paginationProps={{
          pageSizeSelect: {
            dropdownLabel: translations.get('pagination.pageSizeLabel'),
            options: pageSizeOptions,
            defaultValue: defaultPageSizeValue
          },
          jumpToPage: {
            inputTitle: translations.get('pagination.jumpToPageLabel')
          },
          getTotalCountInfo: (pagination) => {
            const currentPageFirstValue = pagination.pageSize * pagination.page - pagination.pageSize + 1;

            const currentPageLastValue =
              pagination.pageSize * pagination.page > props.rowCount
                ? props.rowCount
                : pagination.pageSize * pagination.page;

            return `${currentPageFirstValue}-${currentPageLastValue} ${translations.get(
              'pagination.totalCountDivider'
            )} ${props.rowCount}`;
          }
        }}
        filterProps={filterProps}
        tableProps={tableProps}
      />
    </>
  );
};
