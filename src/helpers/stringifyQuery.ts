const stringifyNestedObject = (object: {}, objectKey: string): string => {
  return Object.entries(object).reduce(
    (acc, [key, value]) =>
      value
        ? typeof value === 'object'
          ? acc + stringifyNestedObject(value, `${objectKey}.${key}`)
          : acc + `${objectKey}.${key}=${value}&`
        : acc,
    ''
  );
};

const stringifyArray = (array: any[], objectKey: string): string => {
  return Object.values(array).reduce((acc, value) => (value ? acc + `${objectKey}=${value}&` : acc), '');
};

export const stringifyQuery = (object: {}) => {
  return Object.entries(object).reduce(
    (acc, [key, value]) =>
      value
        ? typeof value === 'object'
          ? Array.isArray(value)
            ? stringifyArray(value, key)
            : acc + stringifyNestedObject(value, key)
          : acc + `${key}=${value}&`
        : acc,
    ''
  );
};
