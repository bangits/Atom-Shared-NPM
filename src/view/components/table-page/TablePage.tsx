import { AtomCommonContext, redirectToURL } from '@/atom-common';
import { PageIdsEnum, PrimaryKey } from '@/domain';
import { useLoading, useTranslation } from '@/view';
import { PageConfigViewModel } from '@/view/models';
import { DataTable, DataTableProps } from '@atom/design-system';
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

export interface TablePageProps<T extends {}, K> extends Omit<DataTableProps<T, K>, 'paginationProps'> {
  filterProps: Omit<DataTableProps<T, K>['filterProps'], 'resultLabel' | 'applyLabel' | 'clearLabel'>;
  rowCount: number;
  defaultPageSizeValue?: number;
  pageSizeDividerValue?: number;
  maxViewOrEditColumnsCount?: number;
  isEmpty?: boolean;
  isFetching?: boolean;
  isLoading?: boolean;
  isFilteredData?: boolean;
  pageId?: PageIdsEnum;
  userId?: PageIdsEnum;
  getEditUrl?: (column: T) => string;
  getViewUrl?: (column: T) => string;
  refetch?: () => void;
}

export const TablePage = <T extends {}, K>({
  defaultPageSizeValue = 20,
  pageSizeDividerValue = 50,
  isEmpty = false,
  isFetching,
  isLoading,
  isFilteredData,
  getViewUrl,
  getEditUrl,
  maxViewOrEditColumnsCount = 50,
  refetch,
  pageId,
  userId,
  ...props
}: TablePageProps<T, K>) => {
  const { pageConfigsUseCase } = useContext(AtomCommonContext);

  const translations = useTranslation();

  const tableConfigUpdateTimeout = useRef(false);

  const [filtersConfig, setFiltersConfig] = useState<{ id: PrimaryKey; config: PageConfigViewModel[] }>({
    id: null,
    config: null
  });

  const [tableConfig, setTableConfig] = useState<{ id: PrimaryKey; config: PageConfigViewModel[] }>({
    id: null,
    config: null
  });

  const [selectedColumnsLength, setSelectedColumnsLength] = useState(0);

  const changeLoading = useLoading();

  const filtersHashMap = useMemo(() => {
    return props.filterProps.filters.reduce((acc, filter) => ({ ...acc, [filter.name]: filter }), {});
  }, [props.filterProps.filters]);

  const sortedFilters = useMemo(
    () => filtersConfig.config?.sort((prev, next) => prev.Order - next.Order),
    [filtersConfig.config]
  );

  const showedFilters = useMemo(
    () => sortedFilters?.filter((f) => f.IsActive)?.map((f) => filtersHashMap[f.Name]),
    [sortedFilters]
  );

  const filters = useMemo(() => sortedFilters?.map((f) => filtersHashMap[f.Name]), [sortedFilters]);

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
      },
      ...(pageId && userId
        ? {
            onSaveClick: (filters, showedFilters) => {
              updateConfig(
                filtersConfig.id,
                filters.map((filter) => ({
                  Order: showedFilters.findIndex((f) => f.name === filter.name) + 1,
                  IsActive: !!showedFilters.find((f) => f.name === filter.name),
                  Name: filter.name
                }))
              );
            },
            defaultFilters: filtersConfig.config?.filter((f) => f.IsActive).map((f) => f.Name),
            filters,
            showedFilters,
            saveLabel: translations.get('save')
          }
        : {})
    }),
    [translations, props.filterProps, props.rowCount, filters, pageId]
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
      isLoading,
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
    [props.tableProps, getViewUrl, getEditUrl, selectedColumnsLength, isLoading]
  );

  const updateConfig = useCallback(
    (configId: PrimaryKey, configJSON: PageConfigViewModel[]) => {
      if (tableConfigUpdateTimeout.current) return;

      pageConfigsUseCase.updatePageConfigs(configId, configJSON);

      setTimeout(() => (tableConfigUpdateTimeout.current = false), 700);
    },
    [tableConfigUpdateTimeout]
  );

  useEffect(() => {
    if (!isFilteredData) changeLoading(true);
  }, []);

  useEffect(() => {
    if (!isFetching) changeLoading(false);
  }, [isFetching]);

  useEffect(() => {
    if (pageId && userId)
      pageConfigsUseCase.getPageConfigs(pageId, userId).then((config) => {
        setFiltersConfig({
          id: config.filtersConfig.id,
          config: config.filtersConfig.config || null
        });

        setTableConfig({
          id: config.columnConfig.id,
          config: config.columnConfig.config || null
        });
      });
  }, []);

  if ((isFetching && !isFilteredData) || (pageId && userId && !tableConfig.config)) return null;

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
        onRefreshButtonClick={refetch}
        onTableConfigChange={(tableColumns, selectedColumns) => {
          if (!pageId || !userId) return;

          updateConfig(
            tableConfig.id,
            tableColumns.map((column, index) => ({
              Order: index + 1,
              IsActive: selectedColumns.includes(column.value),
              Name: column.value
            }))
          );
        }}
        columnsConfigDefaultValue={
          pageId && userId && tableConfig.config?.filter((config) => config.IsActive)?.map((config) => config.Name)
        }
      />
    </>
  );
};
