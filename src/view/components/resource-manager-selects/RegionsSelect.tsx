import { AtomCommonContext } from '@/adapter/react-context';
import { MAX_PAGE_SIZE } from '@/configs';
import { Region } from '@/domain/entities';
import { useContext, useEffect, useMemo, useState } from 'react';
import { CustomSelect, CustomSelectProps } from '../shared';

export interface RegionSelectProps extends Omit<CustomSelectProps, 'options'> {
  countryId?: number | number[];
}

export const RegionSelect = ({ countryId, ...selectProps }: Partial<RegionSelectProps>) => {
  const { resourceManagerUseCase } = useContext(AtomCommonContext);

  const [regions, setRegions] = useState<Region[]>([]);

  const selectOption = useMemo(() => regions.map((p) => ({ value: p.id, label: p.name })), [regions]);

  useEffect(() => {
    if (!countryId || (Array.isArray(countryId) && !countryId.length)) {
      setRegions([]);

      return;
    }

    resourceManagerUseCase
      .getRegion({
        countryIds: Array.isArray(countryId) ? countryId : [countryId],
        filterName: null,
        pageNumber: 1,
        pageSize: MAX_PAGE_SIZE
      })
      .then((getRegionResponse) => setRegions(getRegionResponse.results));
  }, [countryId]);

  return (
    <>
      <CustomSelect {...selectProps} options={selectOption} />
    </>
  );
};
