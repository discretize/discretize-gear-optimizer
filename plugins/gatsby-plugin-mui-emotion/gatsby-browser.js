/* eslint-disable import/prefer-default-export */
import React from 'react';
import { CacheProvider } from '@emotion/react';
import getEmotionCache, { getTssCache } from './getEmotionCache';
import { TssCacheProvider } from 'tss-react';

const cache = getEmotionCache();
const tssCache = getTssCache();

export const wrapRootElement = ({ element }) => {
  return (
    <CacheProvider value={cache}>
      <TssCacheProvider value={tssCache}>{element}</TssCacheProvider>
    </CacheProvider>
  );
};
