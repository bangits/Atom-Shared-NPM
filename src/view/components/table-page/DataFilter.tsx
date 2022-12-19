import { AtomCommonContext, PageConfigTypesEnum, PageIdsEnum, PrimaryKey, useTranslation } from '@/atom-common';
import { PageConfigViewModel } from '@/view/models';
import { Filters, FiltersProps } from '@atom/design-system';
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

export interface DataFilterProps<T> extends Omit<FiltersProps<T>, 'selectProps'> {
  shouldFetchPageConfig?: boolean;
  pageId?: PageIdsEnum;
  userId?: PrimaryKey;
  filtersConfig?: { id: PrimaryKey; config: PageConfigViewModel[] };
}

export const DataFilter = <T,>({
  shouldFetchPageConfig = true,
  filters,
  onSaveClick: onSaveClickProp,
  pageId,
  userId,
  filtersConfig: filtersConfigProp,
  ...props
}: DataFilterProps<T>) => {
  const t = useTranslation();

  const filterConfigUpdateTimeout = useRef(false);

  const { pageConfigsUseCase } = useContext(AtomCommonContext);

  const [filtersConfig, setFiltersConfig] = useState<{ id: PrimaryKey; config: PageConfigViewModel[] }>({
    id: null,
    config: null
  });

  const updateConfig = useCallback(
    (configId: PrimaryKey, configJSON: PageConfigViewModel[]) => {
      if (filterConfigUpdateTimeout.current) return;

      pageConfigsUseCase.updatePageConfigs(pageId, configId, configJSON, PageConfigTypesEnum.FILTER);

      setTimeout(() => (filterConfigUpdateTimeout.current = false), 700);
    },
    [pageId, filterConfigUpdateTimeout, pageId]
  );

  const filtersHashMap = useMemo(
    () => filters && filters.reduce((acc, filter) => ({ ...acc, [filter.name]: filter }), {}),
    [filters]
  );

  const sortedFilters = useMemo(
    () => filtersConfig.config?.sort((prev, next) => prev.Order - next.Order),
    [filtersConfig.config]
  );

  const showedFilters = useMemo(
    () => sortedFilters?.filter((f) => f.IsActive)?.map((f) => filtersHashMap[f.Name]),
    [sortedFilters]
  );

  const defaultFilters = useMemo(
    () => filtersConfig.config?.filter((f) => f.IsActive).map((f) => f.Name),
    [filtersConfig]
  );

  const filtersDropdownProps = useMemo<FiltersProps<T>['selectProps']>(
    () => ({
      selectAll: true,
      selectAllLabel: t.get('all'),
      clearButton: true,
      clearButtonLabel: t.get('clear'),
      color: 'primary'
    }),
    [t]
  );

  const onSaveClick = useCallback<FiltersProps<T>['onSaveClick']>(
    (filters, showedFilters, e) => {
      updateConfig(
        filtersConfig.id,
        filters.map((filter) => ({
          Order: showedFilters.findIndex((f) => f.name === filter.name) + 1,
          IsActive: !!showedFilters.find((f) => f.name === filter.name),
          Name: filter.name
        }))
      );

      onSaveClickProp?.(filters, showedFilters, e);
    },
    [filtersConfig, onSaveClickProp]
  );

  useEffect(() => {
    if (pageId && userId && shouldFetchPageConfig)
      pageConfigsUseCase.getPageConfigs(pageId, userId).then((config) =>
        setFiltersConfig({
          id: config.filtersConfig.id,
          config: config.filtersConfig.config || null
        })
      );
  }, [pageId, userId, shouldFetchPageConfig]);

  useEffect(() => {
    if (filtersConfigProp) setFiltersConfig(filtersConfigProp);
  }, [filtersConfigProp]);

  if (!filtersConfig.id) return null;

  return (
    <Filters
      {...props}
      clearLabel={t.get('clear')}
      applyLabel={t.get('apply')}
      infoTooltipText={t.get('filtersHelperText')}
      saveLabel={t.get('saveFilterChanges')}
      showedFilters={showedFilters}
      filters={filters}
      defaultFilters={defaultFilters}
      onSaveClick={onSaveClick}
      selectProps={filtersDropdownProps}
    />
  );
};
