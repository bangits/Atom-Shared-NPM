import { useCallback, useEffect, useMemo, useState } from 'react';
import { PagedModel, PagedResult } from '@/domain';

type ActionRequest<RequestModel> = PagedModel & RequestModel;

type ActionResponse<ResponseModel> = { data: PagedResult<ResponseModel> };

interface UseLoadMore<DataModel, FilterModel> {
  action: (args: ActionRequest<FilterModel>) => Promise<ActionResponse<DataModel>>;
  initialFilters: ActionRequest<FilterModel>;
  isFetching: boolean;
}

export const useLoadMore = <DataModel, FilterModel>({
  action,
  isFetching,
  initialFilters
}: UseLoadMore<DataModel, FilterModel>) => {
  const [page, setPage] = useState(1);
  const [currentData, setCurrentData] = useState<DataModel[]>([]);
  const [rowCount, setRowCount] = useState(0);
  const [allGamesLoaded, setAllGamesLoaded] = useState(false);
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
  }, [currentData, updateData]);

  const onFiltersChange = useCallback(
    async (updatedFilters: ActionRequest<FilterModel>) => {
      const { data } = await action(updatedFilters);
      setFilters(updatedFilters);
      updateData(data);
    },
    [updateData]
  );

  const onFiltersClear = useCallback(async () => {
    const { data } = await action(initialFilters);
    updateData(data);
  }, [updateData]);

  const loadMore = useCallback(async () => {
    setPage(page + 1);
    const { data } = await action({
      ...filters,
      pagination: {
        ...filters.pagination,
        page: page + 1
      }
    });
    !data.results.length && setAllGamesLoaded(true);
    setCurrentData((prevState) => [...prevState, ...data.results]);
    setRowCount(data.rowCount);
  }, [filters, page]);

  const scrollableViewProps = useMemo(
    () => ({
      disableOnPageChange: isFetching || allGamesLoaded || currentData.length < filters.pagination.pageSize,
      showLoader: isFetching,
      onPageChange: loadMore
    }),
    [isFetching, allGamesLoaded, loadMore, currentData]
  );

  const initialFetch = useCallback(async () => {
    const { data } = await action(initialFilters);
    updateData(data);
  }, [updateData]);

  useEffect(() => {
    initialFetch();
  }, []);

  return {
    data: currentData,
    refetch,
    onFiltersClear,
    onFiltersChange,
    rowCount,
    scrollableViewProps
  };
};
