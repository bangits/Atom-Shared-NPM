import { Dispatch, SetStateAction, useCallback, useMemo, useState } from 'react';

const useToggle = (defaultValue = false) => {
  const [booleanValue, setBooleanValue] = useState(defaultValue);

  const toggler = useCallback(() => setBooleanValue((prevValue) => !prevValue), []);

  return useMemo<[boolean, () => void, Dispatch<SetStateAction<boolean>>]>(
    () => [booleanValue, toggler, setBooleanValue],
    [booleanValue]
  );
};

export default useToggle;
