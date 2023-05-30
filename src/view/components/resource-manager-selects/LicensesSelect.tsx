import { AtomCommonContext, Licenses, MAX_PAGE_SIZE, PrimaryKey, useTranslation } from '@/atom-common';
import { CustomSelect, CustomSelectProps } from '../shared/CustomSelect';
import { useContext, useEffect, useMemo, useState } from 'react';
import { LicenseTypesEnum } from '@/domain/models/enums/LicenseTypesEnum';

export const LicensesSelect = ({
  onLicensesGet,
  type = LicenseTypesEnum.Game,
  valueProp = 'id',
  ...props
}: Partial<CustomSelectProps> & {
  expectLanguagesIds?: PrimaryKey[];
  valueProp?: 'name' | 'id';
  type: LicenseTypesEnum;
  onLicensesGet?(licenses: Licenses[]): void;
}) => {
  const [licenses, setLicenses] = useState<Licenses[]>([]);
  const t = useTranslation();
  const { resourceManagerUseCase } = useContext(AtomCommonContext);

  const options = useMemo(() => licenses?.map((item) => ({ label: item.name, value: item.id })) || [], [licenses]);

  useEffect(() => {
    resourceManagerUseCase
      .getLicenses({
        type: type,
        name: null,
        pagination: {
          page: 1,
          pageSize: MAX_PAGE_SIZE
        }
      })
      .then((getLicensesResponse) => {
        setLicenses(getLicensesResponse.results);

        onLicensesGet?.(getLicensesResponse.results);
      });
  }, []);

  return <CustomSelect inputLabel={t.get('licenses')} {...props} options={options}></CustomSelect>;
};
