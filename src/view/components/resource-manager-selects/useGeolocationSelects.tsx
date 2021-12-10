import { useTranslation } from '@/view';
import { CityVillageSelect, CountriesSelect, RegionSelect } from '@/view/components/resource-manager-selects';
import { CustomSelectProps } from '@my-ui/core';
import { FastField, FastFieldProps, Field } from 'formik';

export function useGeolocationSelects({
  countryName,
  regionName,
  cityName
}: {
  countryName: string;
  regionName: string;
  cityName: string;
}) {
  const t = useTranslation();
  return {
    CountrySelect: (props: CustomSelectProps) => {
      return (
        <FastField name={countryName}>
          {({ form, field }: FastFieldProps) => (
            <CountriesSelect
              {...props}
              {...field}
              fullWidth
              inputLabel={t.get('common.geoFields.country')}
              onChange={(value) => {
                form.setFieldValue(countryName, value);
                form.setFieldTouched(countryName, true);

                form.setFieldValue(regionName, null);
                form.setFieldValue(cityName, null);
              }}
            />
          )}
        </FastField>
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
              inputLabel={t.get('common.geoFields.region')}
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
              inputLabel={t.get('common.geoFields.region')}
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
  };
}
