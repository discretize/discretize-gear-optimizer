export const PARAMS = {
  VERSION: 'v',
  GAMEMODE: 'm',
  SHORTENER: 's',
  BUILD: 'data',
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
}
