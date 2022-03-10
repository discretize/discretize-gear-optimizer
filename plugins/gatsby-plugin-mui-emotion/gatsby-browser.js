/* eslint-disable import/prefer-default-export */
import { CacheProvider } from '@emotion/react';
import React from 'react';
import { TssCacheProvider } from 'tss-react';
import getEmotionCache, { getTssCache } from './getEmotionCache';

const cache = getEmotionCache();
const tssCache = getTssCache();

export const wrapRootElement = ({ element }) => {
  return (
    <CacheProvider value={cache}>
      <TssCacheProvider value={tssCache}>{element}</TssCacheProvider>
    </CacheProvider>
  );
};
