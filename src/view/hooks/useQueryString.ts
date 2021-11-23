import queryString from 'query-string';
import { useMemo } from 'react';

export const useQueryString = <T extends queryString.ParsedQuery<string>>(): T => {
  const parsedQueries = useMemo(() => queryString.parse(window.location.search), [window.location.search]);

  return parsedQueries as T;
};
