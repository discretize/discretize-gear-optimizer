import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { TssCacheProvider } from 'tss-react';
import getEmotionCache, { getTssCache } from './getEmotionCache';

// Inject MUI styles first to match with the prepend: true configuration.
export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents();
  headComponents.sort((a, b) => {
    if (a.key === 'emotion-css-global' || a.key === 'emotion-css') {
      return -1;
    }
    if (b.key === 'style') {
      return 1;
    }
    return 0;
  });
  replaceHeadComponents(headComponents);
};

export const replaceRenderer = ({ bodyComponent, setHeadComponents, replaceBodyHTMLString }) => {
  const cache = getEmotionCache();
  const tssCache = getTssCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  const emotionStyles = extractCriticalToChunks(
    renderToString(
      <CacheProvider value={cache}>
        <TssCacheProvider value={tssCache}>{bodyComponent}</TssCacheProvider>
      </CacheProvider>,
    ),
  );

  setHeadComponents(
    emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={`emotion-${style.key}`}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    )),
  );

  // render the result from `extractCritical`
  replaceBodyHTMLString(emotionStyles.html);
};
