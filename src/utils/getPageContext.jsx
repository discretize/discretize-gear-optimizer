/* eslint-disable no-underscore-dangle */

import createGenerateClassName from '@mui/styles/createGenerateClassName';
import { SheetsRegistry } from 'jss';
import theme from '../styles/theme';

const createPageContext = () => ({
  theme,
  // This is needed in order to deduplicate the injection of CSS in the page.
  sheetsManager: new Map(),
  // This is needed in order to inject the critical CSS.
  sheetsRegistry: new SheetsRegistry(),
  // The standard class name generator.
  generateClassName: createGenerateClassName(),
});

export default () => {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).

  // if (!process.browser) {
  //   return createPageContext();
  // }

  // no idea why this needs to be commented out. Apparently process only exists when the
  // server is run with node? Since we have a static page I assume this is a relict from looooong ago. ~pri

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
};
