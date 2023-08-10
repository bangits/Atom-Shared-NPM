import { useCallback, useEffect, useMemo, useState } from 'react';
import { PagedModel, PagedResult } from '@/domain';

type ActionRequest<RequestModel> = PagedModel & RequestModel;
type ActionResponse<ResponseModel> = { data: PagedResult<ResponseModel> };

interface UseLoadMore<DataModel, FilterModel> {
  action: (args: ActionRequest<FilterModel>) => Promise<ActionResponse<DataModel>>;
  initialFilters: ActionRequest<FilterModel>;
}

export const useLoadMore = <DataModel, FilterModel>({
  action,
  initialFilters
}: UseLoadMore<DataModel, FilterModel>) => {
  const [page, setPage] = useState(1);
  const [currentData, setCurrentData] = useState<DataModel[]>([]);
  const [rowCount, setRowCount] = useState(0);
  const [areAllGamesLoaded, setAreAllGamesLoaded] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);
  const [isInitialFiltering, setIsInitialFiltering] = useState(false);
  const [filters, setFilters] = useState<ActionRequest<FilterModel>>(initialFilters);

  const updateData = useCallback((data) => {
    setCurrentData(data.results);
    setRowCount(data.rowCount);
  }, []);

  const refetch = useCallback(async () => {
    const { data } = await action({
      ...filters,
      pagination: { ...filters.pagination, pageSize: currentData.length }
    });
    updateData(data);
  }, [currentData, updateData, action]);

  const makeFilter = useCallback(async (newFilters) => {
    setIsFiltering(true);
    const { data } = await action(newFilters);
    setPage(1);
    setIsFiltering(false);
    setAreAllGamesLoaded(false);
    setFilters(newFilters);
    updateData(data);
  }, []);

  const onFiltersChange = useCallback(
    async (updatedFilters: ActionRequest<FilterModel>) => {
      makeFilter(updatedFilters);
    },
    [makeFilter]
  );

  const onFiltersClear = useCallback(async () => {
    makeFilter(initialFilters);
  }, [initialFilters, makeFilter]);

  const loadMore = useCallback(async () => {
    setIsLoadingMore(true);
    setPage(page + 1);
    const { data } = await action({
      ...filters,
      pagination: {
        ...filters.pagination,
        page: page + 1
      }
    });
    setIsLoadingMore(false);
    !data.results.length && setAreAllGamesLoaded(true);
    setCurrentData((prevState) => [...prevState, ...data.results]);
    setRowCount(data.rowCount);
  }, [filters, page, action]);

  const scrollableViewProps = useMemo(
    () => ({
      disableOnPageChange: isLoadingMore || areAllGamesLoaded,
      showLoader: isLoadingMore,
      onPageChange: loadMore
    }),
    [isLoadingMore, areAllGamesLoaded, loadMore, currentData]
  );

  const initialFetch = useCallback(async () => {
    setIsInitialFiltering(true);
    const { data } = await action(initialFilters);
    setIsInitialFiltering(false);
    updateData(data);
  }, [updateData, action]);

  useEffect(() => {
    initialFetch();
  }, []);

  return {
    data: currentData,
    isInitialFiltering,
    isLoadingMore,
    isFiltering,
    areAllGamesLoaded,
    refetch,
    onFiltersClear,
    onFiltersChange,
    rowCount,
    scrollableViewProps,
    filters
  };
};
