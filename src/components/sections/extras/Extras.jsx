import { ConsumableEffect, Item } from '@discretize/gw2-ui-new';
import { Grid } from '@mui/material';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { allExtrasModifiersById, extrasModifiers } from '../../../assets/modifierdata';
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
          modifierDataById={allExtrasModifiersById}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <GW2Select
          name="Sigil2"
          label={<Item id={24868} disableLink disableTooltip text={t('Sigil 2')} />}
          modifierData={extrasModifiers.sigils}
          modifierDataById={allExtrasModifiersById}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <GW2Select
          name="Runes"
          label={<Item id={24836} disableLink disableTooltip text={t('Rune')} />}
          modifierData={extrasModifiers.runes}
          modifierDataById={allExtrasModifiersById}
        />
      </Grid>
      <Grid item md={6} />
      <Grid item xs={12} md={6}>
        <GW2Select
          name="Nourishment"
          label={<ConsumableEffect disableLink text={t('Nourishment')} name="Nourishment" />}
          modifierData={extrasModifiers.food}
          modifierDataById={allExtrasModifiersById}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <GW2Select
          name="Enhancement"
          label={<ConsumableEffect disableLink text={t('Enhancement')} name="Enhancement" />}
          modifierData={extrasModifiers.utility}
          modifierDataById={allExtrasModifiersById}
        />
      </Grid>
    </Grid>
  );
};

export default React.memo(Extras);
