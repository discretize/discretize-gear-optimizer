import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import withTheme from '@mui/styles/withTheme';
import React from 'react';
import gw2Styles from '../styles/gw2';

const specializationAliases = {
  dragonhunter: 'guardian',
  firebrand: 'guardian',
  herald: 'revenant',
  renegade: 'revenant',
  berserker: 'warrior',
  spellbreaker: 'warrior',
  scrapper: 'engineer',
  holosmith: 'engineer',
  druid: 'ranger',
  soulbeast: 'ranger',
  daredevil: 'thief',
  deadeye: 'thief',
  tempest: 'elementalist',
  weaver: 'elementalist',
  chronomancer: 'mesmer',
  mirage: 'mesmer',
  reaper: 'necromancer',
  scourge: 'necromancer',
};

export default (props) => (Component) =>
  withTheme()(({ theme, ...rest }) => {
    const { profession, specialization, type } = props || { ...rest };

    let alias;

    alias = profession && typeof profession === 'string' && profession.toLowerCase();

    if (!alias) {
      const lowerCaseSpecialization =
        specialization && typeof specialization === 'string' && specialization.toLowerCase();
      alias =
        lowerCaseSpecialization &&
        (specializationAliases[lowerCaseSpecialization] || lowerCaseSpecialization);
    }

    if (!alias) {
      alias = type && typeof type === 'string' && type.toLowerCase();
    }

    const gw2Theme = alias && (!theme || alias !== theme.name) && gw2Styles[alias];

    return gw2Theme ? (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={gw2Theme}>
          <Component {...rest} />
        </ThemeProvider>
      </StyledEngineProvider>
    ) : (
      <Component {...rest} />
    );
  });
