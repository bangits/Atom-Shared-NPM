export const replaceEmptyStringsWithNull = <T>(object: T): T => {
  return Object.entries(object).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: value === '' ? null : value }),
    {} as T
  );
};
