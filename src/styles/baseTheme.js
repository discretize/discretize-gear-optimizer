import { baseTheme } from 'gw2-ui-bulk';

export default {
  ...baseTheme,

  colors: {
    ...baseTheme.colors,
    text: '#fff',
    gw2: {
      ...baseTheme.colors.gw2,
      rarity: {
        ...baseTheme.colors.gw2.rarity,
        basic: '#fff',
        basicDark: '#fff',
        basicLight: '#fff',
      },
    },
  },

  useBodyStyles: false,
  initialColorModeName: 'dark',
  useBorderBox: false,
  useLocalStorage: false,
};
