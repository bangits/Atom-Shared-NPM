import { FastFieldProps, Field as FormikField } from 'formik';
import { useMemo } from 'react';
import { useTranslation } from '.';
import { CityVillageSelect, CountriesSelect, CustomSelectProps, RegionSelect } from '..';

export const useGeolocationSelects = ({
  countryName,
  regionName,
  cityName,
  field: Field
}: {
  countryName: string;
  regionName: string;
  cityName: string;
  field: typeof FormikField;
}) => {
  const t = useTranslation();

  return useMemo(
    () => ({
      CountrySelect: (props: CustomSelectProps) => {
        return (
          <Field name={countryName}>
            {({ form, field }: FastFieldProps) => (
              <CountriesSelect
                {...props}
                {...field}
                fullWidth
                inputLabel={t.get('country')}
                onChange={(value) => {
                  form.setFieldValue(countryName, value);
                  form.setFieldTouched(countryName, true);

                  form.setFieldValue(regionName, null);
                  form.setFieldValue(cityName, null);
                }}
              />
            )}
          </Field>
        );
      },
      RegionSelect: (props: CustomSelectProps) => {
        return (
          <Field name={regionName}>
            {({ form, field }: FastFieldProps) => (
              <RegionSelect
                {...props}
                {...field}
                fullWidth
                inputLabel={t.get('region')}
                countryId={form.values[countryName]}
                onChange={(value) => {
                  form.setFieldValue(regionName, value);
                  form.setFieldTouched(regionName, true);

                  form.setFieldValue(cityName, null);
                }}
              />
            )}
          </Field>
        );
      },
      CitySelect: (props: CustomSelectProps) => {
        return (
          <Field name={cityName}>
            {({ form, field }: FastFieldProps) => (
              <CityVillageSelect
                {...props}
                {...field}
                fullWidth
                inputLabel={t.get('city')}
                isCity
                regionId={form.values[regionName]}
                onChange={(value) => {
                  form.setFieldValue(cityName, value);
                  form.setFieldTouched(cityName, true);
                }}
              />
            )}
          </Field>
        );
      }
    }),
    [countryName, regionName, cityName]
  );
};
