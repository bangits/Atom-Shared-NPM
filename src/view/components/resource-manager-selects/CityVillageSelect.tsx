import { AtomCommonContext } from '@/adapter/react-context';
import { MAX_PAGE_SIZE } from '@/configs';
import { CityVillage } from '@/domain/entities';
import { useContext, useEffect, useMemo, useState } from 'react';
import { CustomSelect, CustomSelectProps } from '../shared';

export interface CityVillageSelectProps extends Partial<CustomSelectProps> {
  regionId: number;
  isCity: boolean;
}

export const CityVillageSelect = ({ isCity, regionId, ...selectProps }: CityVillageSelectProps) => {
  const { resourceManagerUseCase } = useContext(AtomCommonContext);

  const [citiesVillages, setCitiesVillages] = useState<CityVillage[]>([]);

  const selectOptions = useMemo(() => citiesVillages.map((c) => ({ value: c.id, label: c.name })), [citiesVillages]);

  useEffect(() => {
    resourceManagerUseCase
      .getCityVillage({
        regionId,
        isCity,
        filterName: null,
        pageNumber: 1,
        pageSize: MAX_PAGE_SIZE
      })
      .then((getCityVillageResponse) => setCitiesVillages(getCityVillageResponse.results));
  }, []);

  return (
    <>
      <CustomSelect {...selectProps} options={selectOptions} />
    </>
  );
};
