export const PARAMS = {
  BUILD: 'data',
  VERSION: 'v',
  GAMEMODE: 'm',
  SHORTENER: 's',
};

export function useQueryParam({ key }) {
  if (typeof window === 'undefined') return '';

  const queryParam = new URLSearchParams(window.location.search);

  return queryParam.get(key);
}

export function setQueryParm({ key, value }) {
  if (typeof window === 'undefined') return;

  const current = new URL(window.location.href);

  if (typeof value === 'undefined') {
    current.searchParams.delete(key);
  } else {
    current.searchParams.set(key, value);
  }

  if (window.history.pushState) window.history.pushState(null, '', current.href);
  /*
  const current = queryString.parse(window.location.search);
  current[key] = value;

  const newPath = `?${queryString.stringify(current)}`;

  if (window.history.pushState)
    window.history.pushState(
      null,
      '',
      window.location.pathname + (newPath.length > 1) ? newPath : undefined,
    );
    */
}
