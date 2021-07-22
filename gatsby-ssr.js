/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { JssProvider } from 'react-jss';

import getPageContext from './src/utils/getPageContext';
import createStore from './src/utils/createStore';

// eslint-disable-next-line import/prefer-default-export
export const replaceRenderer = ({
                                  bodyComponent,
                                  replaceBodyHTMLString,
                                  setHeadComponents,
                                }) => {
  const store = createStore();
  const { sheetsRegistry } = getPageContext();

  replaceBodyHTMLString(
    renderToString(
      <Provider store={store}>
        <JssProvider registry={sheetsRegistry}>{bodyComponent}</JssProvider>
      </Provider>,
    ),
  );

  setHeadComponents([
    <style
      type="text/css"
      id="jss-server-side"
      key="jss-server-side"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: sheetsRegistry.toString(),
      }}
    />,
  ]);
};
