const encodeValue = (value: unknown) => (typeof value === 'string' ? encodeURIComponent(value) : value);

const stringifyNestedObject = (object: {}, objectKey: string): string => {
  return Object.entries(object).reduce(
    (acc, [key, value]) =>
      value
        ? typeof value === 'object'
          ? acc + stringifyNestedObject(value, `${objectKey}.${key}`)
          : acc + `${objectKey}.${key}=${encodeValue(value)}&`
        : acc,
    ''
  );
};

const stringifyArray = (array: any[], objectKey: string): string => {
  return Object.values(array).reduce((acc, value) => (value ? acc + `${objectKey}=${encodeValue(value)}&` : acc), '');
};

export const stringifyQuery = (object: {}) => {
  return Object.entries(object).reduce(
    (acc, [key, value]) =>
      value || value === false
        ? typeof value === 'object'
          ? Array.isArray(value)
            ? acc + stringifyArray(value, key)
            : acc + stringifyNestedObject(value, key)
          : acc + `${key}=${encodeValue(value)}&`
        : acc,
    ''
  );
};
