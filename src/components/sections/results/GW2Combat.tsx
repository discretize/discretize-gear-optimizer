import { Button, Typography } from '@mui/material';
import React from 'react';
import { Trans } from 'react-i18next';
import type { Character } from '../../../state/optimizer/types/optimizerTypes';
import { copyGw2CombatData } from './gw2CombatBackend';

const GW2Combat = ({ character }: { character: Character }) => {
  return (
    <>
      <Typography variant="body1">
        <Trans>(under construction)</Trans>
      </Typography>

      <Button variant="contained" onClick={() => copyGw2CombatData(character)}>
        export data
      </Button>
    </>
  );
};

export default React.memo(GW2Combat);
