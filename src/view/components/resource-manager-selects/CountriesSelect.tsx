import { useCountries } from '@/atom-common';
import { PrimaryKey } from '@/domain';
import { Country } from '@/domain/entities';
import { useEffect, useMemo } from 'react';
import { CustomSelect, CustomSelectProps } from '../shared';

export interface CountrySelectProps extends Omit<CustomSelectProps, 'options'> {}

export const CountriesSelect = ({
  expectCountriesIds,
  ...props
}: Omit<
  Partial<CountrySelectProps> & {
    valueProp?: 'id' | 'name' | 'isoCode';
    expectCountriesIds?: PrimaryKey[];
    onCountriesGet?(countries: Country[]): void;
  },
  'options'
>) => {
  const countries = useCountries();

  const selectOptions = useMemo(
    () =>
      countries
        .map((c) => ({ value: c[props.valueProp || 'id'], label: c.name }))
        .filter((currency) => (expectCountriesIds ? !expectCountriesIds.includes(currency.value) : true)),
    [countries, expectCountriesIds]
  );

  useEffect(() => {
    if (countries.length) props.onCountriesGet?.(countries);
  }, [countries]);

  return (
    <>
      <CustomSelect {...props} options={selectOptions} />
    </>
  );
};
