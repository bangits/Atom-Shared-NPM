import { AtomCommonContext } from '@/adapter/react-context';
import { MAX_PAGE_SIZE } from '@/configs';
import { TimeZones } from '@/domain';
import { useContext, useEffect, useMemo, useState } from 'react';
import { CustomSelect, CustomSelectProps } from '../shared';

export interface TimeZoneSelectProps extends Omit<CustomSelectProps, 'options'> {}

export const TimeZonesSelect = (props: Partial<TimeZoneSelectProps>) => {
  const { resourceManagerUseCase } = useContext(AtomCommonContext);

  const [TimeZones, setTimeZones] = useState<TimeZones[]>([]);

  const selectOptions = useMemo(() => TimeZones.map((c) => ({ value: c.id, label: c.gmT_offset })), [TimeZones]);

  useEffect(() => {
    resourceManagerUseCase
      .getTimeZone({
        filterName: null,
        pageNumber: 1,
        pageSize: MAX_PAGE_SIZE
      })
      .then((getTimeZonesResponse) => setTimeZones(getTimeZonesResponse.results));
  }, []);

  return (
    <>
      <CustomSelect {...props} options={selectOptions} />
    </>
  );
};
