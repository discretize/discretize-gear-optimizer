import queryString from 'query-string';

export function useQueryParam({ key }) {
  if (typeof window === 'undefined') return '';
  const queryParam = queryString.parse(window.location.search)[key];

  return queryParam;
}

export function setQueryParm({ key, value }) {
  if (typeof window === 'undefined') return;

  const current = queryString.parse(window.location.search);
  current[key] = value;

  const newPath = `?${queryString.stringify(current)}`;

  if (window.history.pushState)
    window.history.pushState(
      null,
      '',
      window.location.pathname + (newPath.length > 1) ? newPath : undefined,
    );
}
