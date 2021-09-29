import React from 'react';
import { Grid } from '@material-ui/core';
import { ConsumableEffect, Item } from 'gw2-ui-bulk';
import Section from '../../baseComponents/Section';
import GW2Select from './GW2Select';

const ExtrasSection = ({ data }) => {
  return (
    <Section
      title="Runes & Sigils & Food"
      content={
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <GW2Select
              name="Sigil1"
              label={<Item id={24615} disableLink disableTooltip text="Sigil 1" />}
              data={data.sigils.list}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <GW2Select
              name="Sigil2"
              label={<Item id={24868} disableLink disableTooltip text="Sigil 2" />}
              data={data.sigils.list}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <GW2Select
              name="Runes"
              label={<Item id={24836} disableLink disableTooltip text="Rune" />}
              data={data.runes.list}
            />
          </Grid>
          <Grid item md={6} />
          <Grid item xs={12} md={6}>
            <GW2Select
              name="Nourishment"
              label={<ConsumableEffect name="Nourishment" />}
              data={data.nourishment.list}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <GW2Select
              name="Enhancement"
              label={<ConsumableEffect name="Enhancement" data={data.sigils.list} />}
              data={data.enhancement.list}
            />
          </Grid>
        </Grid>
      }
    />
  );
};

export default React.memo(ExtrasSection);
