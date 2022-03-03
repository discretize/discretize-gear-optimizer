/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
import '@discretize/gw2-ui-new/dist/default_style.css';
import '@discretize/gw2-ui-new/dist/index.css';
import React from 'react';
import { Provider } from 'react-redux';
import createStore from './src/state/createStore';

const store = createStore();

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};
