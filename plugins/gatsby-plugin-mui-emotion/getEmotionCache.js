import createCache from '@emotion/cache';

// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
export default function getEmotionCache() {
  return createCache({ key: 'mui-css', prepend: true });
}

// https://github.com/garronej/tss-react#cache
// Mui and tss cant share the same cache
export function getTssCache() {
  return createCache({
    key: 'tss-css',
  });
}
