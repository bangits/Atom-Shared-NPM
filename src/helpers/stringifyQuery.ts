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

export const stringifyQuery = (object: {}) => {
  return Object.entries(object).reduce(
    (acc, [key, value]) =>
      value ? (typeof value === 'object' ? acc + stringifyNestedObject(value, key) : acc + `${key}=${value}&`) : acc,
    '?'
  );
};
