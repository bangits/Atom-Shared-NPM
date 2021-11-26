export const getObjectValueByKey = <T>(object: T, key: string): string => {
  let currentValue;

  key.split('.').map((k) => {
    try {
      currentValue = currentValue ? currentValue[k] : object[k];

      if (!currentValue) throw '';
    } catch {
      currentValue = key;
      return;
    }
  });

  return currentValue;
};
