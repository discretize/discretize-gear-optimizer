import React from 'react';
import { Grid } from '@material-ui/core';
import { ConsumableEffect, Item } from 'gw2-ui-bulk';
import Section from '../../baseComponents/Section';
import GW2Select from './GW2Select';

import { extrasModifiers, extrasModifiersById } from '../../../assets/modifierdata';

const ExtrasSection = () => {
  return (
    <Section
      title="Runes & Sigils & Food"
      content={
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <GW2Select
              name="Sigil1"
              label={<Item id={24615} disableLink disableTooltip text="Sigil 1" />}
              modifierData={extrasModifiers.sigils}
              modifierDataById={extrasModifiersById.sigils}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <GW2Select
              name="Sigil2"
              label={<Item id={24868} disableLink disableTooltip text="Sigil 2" />}
              modifierData={extrasModifiers.sigils}
              modifierDataById={extrasModifiersById.sigils}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <GW2Select
              name="Runes"
              label={<Item id={24836} disableLink disableTooltip text="Rune" />}
              modifierData={extrasModifiers.runes}
              modifierDataById={extrasModifiersById.runes}
            />
          </Grid>
          <Grid item md={6} />
          <Grid item xs={12} md={6}>
            <GW2Select
              name="Nourishment"
              label={<ConsumableEffect name="Nourishment" />}
              modifierData={extrasModifiers.food}
              modifierDataById={extrasModifiersById.food}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <GW2Select
              name="Enhancement"
              label={<ConsumableEffect name="Enhancement" />}
              modifierData={extrasModifiers.utility}
              modifierDataById={extrasModifiersById.utility}
            />
          </Grid>
        </Grid>
      }
    />
  );
};

export default React.memo(ExtrasSection);
