/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { JssProvider } from 'react-jss';
import { PersistGate } from 'redux-persist/integration/react';
import { Spinner } from 'gw2-ui-bulk';
import getPageContext from './src/utils/getPageContext';
import createStore from './src/state/createStore';

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const { store, persistor } = createStore();
  const { sheetsRegistry } = getPageContext();

  replaceBodyHTMLString(
    renderToString(
      <Provider store={store}>
        {/* TODO fix redux-persist breaking template swapping <PersistGate loading={<Spinner />} persistor={persistor}> */}
        <PersistGate loading={<Spinner />} persistor={persistor}>
          <JssProvider registry={sheetsRegistry}>{bodyComponent}</JssProvider>
        </PersistGate>
        {/* </PersistGate> */}
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
