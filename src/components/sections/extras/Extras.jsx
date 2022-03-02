import { Grid } from '@mui/material';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { ConsumableEffect, Item } from '@discretize/gw2-ui-new';
import React from 'react';
import { extrasModifiers, extrasModifiersById } from '../../../assets/modifierdata';
import GW2Select from './GW2Select';

const Extras = () => {
  const { t } = useTranslation();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <GW2Select
          name="Sigil1"
          label={<Item id={24615} disableLink disableTooltip text={t('Sigil 1')} />}
          modifierData={extrasModifiers.sigils}
          modifierDataById={extrasModifiersById}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <GW2Select
          name="Sigil2"
          label={<Item id={24868} disableLink disableTooltip text={t('Sigil 2')} />}
          modifierData={extrasModifiers.sigils}
          modifierDataById={extrasModifiersById}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <GW2Select
          name="Runes"
          label={<Item id={24836} disableLink disableTooltip text={t('Rune')} />}
          modifierData={extrasModifiers.runes}
          modifierDataById={extrasModifiersById}
        />
      </Grid>
      <Grid item md={6} />
      <Grid item xs={12} md={6}>
        <GW2Select
          name="Nourishment"
          label={<ConsumableEffect text={t('Nourishment')} name="Nourishment" />}
          modifierData={extrasModifiers.food}
          modifierDataById={extrasModifiersById}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <GW2Select
          name="Enhancement"
          label={<ConsumableEffect text={t('Enhancement')} name="Enhancement" />}
          modifierData={extrasModifiers.utility}
          modifierDataById={extrasModifiersById}
        />
      </Grid>
    </Grid>
  );
};

export default React.memo(Extras);
