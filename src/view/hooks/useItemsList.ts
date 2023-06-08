import { PrimaryKey } from '@/atom-common';
import { useCallback, useMemo, useState } from 'react';

export const useItemsList = () => {
  const [selectedItemIds, setSelectedItemIds] = useState<PrimaryKey[]>([]);

  const selectedItemsHashMap = useMemo<Record<PrimaryKey, boolean>>(
    () =>
      selectedItemIds.reduce(
        (acc, id) => ({
          ...acc,
          [id]: true
        }),
        {}
      ),
    [selectedItemIds]
  );

  const createToggleItem = useCallback(
    (itemId: PrimaryKey) => () =>
      setSelectedItemIds(
        selectedItemsHashMap[itemId] ? selectedItemIds.filter((id) => id !== itemId) : [...selectedItemIds, itemId]
      ),
    [selectedItemIds, selectedItemsHashMap]
  );

  const checkItemIsSelected = useCallback(
    (itemId: PrimaryKey) => !!selectedItemsHashMap[itemId],
    [selectedItemsHashMap]
  );

  const clearSelectedItems = useCallback(() => setSelectedItemIds([]), []);

  const viewSelectedItems = useCallback(
    (getViewUrl: (itemId: PrimaryKey) => string) =>
      selectedItemIds.forEach((itemId) => window.open(getViewUrl(itemId), '_blank')),
    [selectedItemIds]
  );

  return {
    selectedItemIds,
    selectedItemsHashMap,
    setSelectedItemIds,
    viewSelectedItems,
    createToggleItem,
    checkItemIsSelected,
    clearSelectedItems
  };
};
