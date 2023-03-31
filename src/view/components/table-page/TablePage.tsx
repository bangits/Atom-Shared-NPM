import { AtomCommonContext } from '@/atom-common';
import { PageConfigTypesEnum, PageIdsEnum, PrimaryKey } from '@/domain';
import { useLoading, useTranslation } from '@/view';
import { PageConfigViewModel } from '@/view/models';
import { DataTable, DataTableProps } from '@atom/design-system';
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { CustomSelectProps } from '..';
import { DataFilter } from './DataFilter';
import { ExchangeCurrencySelect } from './ExchangeCurrencySelect';

export interface TablePageProps<T extends {}, K>
  extends Omit<DataTableProps<T, K>, 'paginationProps' | 'currencySelect' | 'currencyTranslations'> {
  filterProps: Omit<DataTableProps<T, K>['filterProps'], 'resultLabel' | 'applyLabel' | 'clearLabel'>;
  isSynchronizeShown?: boolean;
  isSynchronize?: boolean;
  rowCount: number;
  defaultPageSizeValue?: number;
  pageSizeDividerValue?: number;
  maxViewOrEditColumnsCount?: number;
  isEmpty?: boolean;
  isFetching?: boolean;
  isLoading?: boolean;
  isFilteredData?: boolean;
  showFilters?: boolean;
  pageId?: PageIdsEnum;
  userId?: PrimaryKey;
  getEditUrl?: (column: T) => string;
  getViewUrl?: (column: T) => string;
  refetch?: () => void;
  onTableConfigChange?: (config: PageConfigViewModel[]) => void;
  onSynchronizeButtonClick?: () => void;
}

export const TablePage = <T extends {}, K>({
  defaultPageSizeValue = 20,
  pageSizeDividerValue = 50,
  isEmpty = false,
  showFilters = true,
  isFetching,
  isLoading,
  isFilteredData,
  getViewUrl,
  getEditUrl,
  maxViewOrEditColumnsCount = 50,
  refetch,
  pageId,
  userId,
  isSynchronizeShown = false,
  isSynchronize = false,
  onTableConfigChange,
  onSynchronizeButtonClick,
  ...props
}: TablePageProps<T, K>) => {
  const { pageConfigsUseCase } = useContext(AtomCommonContext);

  const translations = useTranslation();

  const tableConfigUpdateTimeout = useRef(false);

  const [tableConfig, setTableConfig] = useState<{ id: PrimaryKey; config: PageConfigViewModel[] }>({
    id: null,
    config: null
  });

  const [filtersConfig, setFiltersConfig] = useState<{ id: PrimaryKey; config: PageConfigViewModel[] }>({
    id: null,
    config: null
  });

  const [selectedColumnsLength, setSelectedColumnsLength] = useState(0);

  const changeLoading = useLoading();

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

  const tableColumnsOrdered = useMemo(() => {
    const tableConfigHashMap = tableConfig.config?.reduce<Record<string, number>>(
      (acc, config) => ({ ...acc, [config.Name]: config.Order }),
      {}
    );

    if (!tableConfigHashMap) return props.tableProps.columns;

    return props.tableProps.columns.sort(
      (prevColumn, nextColumn) => tableConfigHashMap[prevColumn.accessor] - tableConfigHashMap[nextColumn.accessor]
    );
  }, [props.tableProps.columns, tableConfig.config]);

  const tableProps = useMemo<typeof props.tableProps>(
    () => ({
      ...(props.tableProps || {}),
      isLoading,
      emptyValue: translations.get('emptyValue'),
      tableFooterGenerateText: translations.get('calculateSum'),
      tableFooterRegenerateText: translations.get('recalculateSum'),
      shouldShowtableFooterRegenerateButton: true,
      actions: [
        ...(props.tableProps.actions || []),
        // ...(getEditUrl && selectedColumnsLength <= maxViewOrEditColumnsCount
        //   ? [
        //       {
        //         iconName: 'EditIcon' as const,
        //         onClick: (columns) => {
        //           if (Array.isArray(columns)) {
        //             columns.forEach((c) => window.open(getEditUrl(c), '_blank'));
        //           } else historyService.redirectToURL(getEditUrl(columns));
        //         },
        //         tooltipText: translations.get('edit')
        //       }
        //     ]
        //   : []),
        ...(getViewUrl && selectedColumnsLength <= maxViewOrEditColumnsCount
          ? [
              {
                iconName: 'ViewIcon' as const,
                onClick: (columns) => {
                  if (Array.isArray(columns)) {
                    columns.forEach((c) => window.open(getViewUrl(c), '_blank'));
                  } else window.open(getViewUrl(columns), '_blank');
                },
                tooltipText: translations.get('view')
              }
            ]
          : [])
      ],
      columns: tableColumnsOrdered,
      onSelectedColumnsChange: (columns) => setSelectedColumnsLength(columns.length)
    }),
    [props.tableProps, getViewUrl, getEditUrl, selectedColumnsLength, isLoading, tableColumnsOrdered]
  );

  const updateConfig = useCallback(
    (configId: PrimaryKey, configJSON: PageConfigViewModel[]) => {
      if (tableConfigUpdateTimeout.current) return;

      pageConfigsUseCase.updatePageConfigs(pageId, configId, configJSON, PageConfigTypesEnum.COLUMN);

      onTableConfigChange?.(configJSON);

      setTimeout(() => (tableConfigUpdateTimeout.current = false), 700);
    },
    [pageId, tableConfigUpdateTimeout]
  );

  const currencySelect = useCallback(
    (selectProps: CustomSelectProps) => (
      <ExchangeCurrencySelect {...selectProps} defaultCurrencyCode={props.defaultCurrency?.label} userId={userId} />
    ),
    [userId]
  );

  useEffect(() => {
    if (!isFetching) changeLoading(false);
  }, [isFetching]);

  useEffect(() => {
    if (!isFilteredData && isFetching) changeLoading(true);

    if (pageId && userId)
      pageConfigsUseCase.getPageConfigs(pageId, userId).then((config) => {
        if (config.filtersConfig) {
          setFiltersConfig({
            id: config.filtersConfig.id,
            config: config.filtersConfig.config || null
          });
        }

        const tableConfig = config.columnConfig.config
          ? config.columnConfig.config?.sort((prev, next) => prev.Order - next.Order)
          : null;

        setTableConfig({
          id: config.columnConfig.id,
          config: tableConfig
        });

        onTableConfigChange?.(tableConfig);
      });
  }, []);

  if (/*(isFetching && !isFilteredData) ||*/ pageId && userId && !tableConfig.config) return null;

  return (
    <DataTable
      renderFilter={(dataTableFilterProps) => (
        <DataFilter
          {...dataTableFilterProps}
          {...(props.filterProps || {})}
          shouldFetchPageConfig={false}
          filtersConfig={filtersConfig}
          filters={props.filterProps.filters}
          initialValues={props.filterProps.initialValues}
        />
      )}
      isSynchronizeShown={isSynchronizeShown}
      {...props}
      rowCount={props.rowCount}
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
      tableProps={tableProps}
      onRefreshButtonClick={refetch}
      onSynchronizeButtonClick={onSynchronizeButtonClick}
      isSynchronize={isSynchronize}
      onTableConfigChange={(tableColumns, selectedColumns) => {
        if (!pageId || !userId) return;

        updateConfig(
          tableConfig.id,
          tableColumns.map((column, index) => ({
            Order: column.index || index + 1,
            IsActive: selectedColumns.includes(column.value),
            Name: column.value
          }))
        );
      }}
      columnsConfigDefaultValue={
        pageId && userId && tableConfig.config?.filter((config) => config.IsActive)?.map((config) => config.Name)
      }
      currencySelect={
        userId && (props.currencyProperty || props.exchangeCurrencyProperty) && tableProps.data?.length
          ? currencySelect
          : null
      }
      currencyTranslations={{
        infoTooltipText: translations.get('selectCurrencyForExchange'),
        exchange: '',
        selected: translations.get('selected'),
        search: translations.get('search')
      }}
    />
  );
};
