import { Grid } from '@material-ui/core';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { ConsumableEffect, Item } from 'gw2-ui-bulk';
import React from 'react';
import { useDispatch } from 'react-redux';
import { extrasModifiers, extrasModifiersById } from '../../../assets/modifierdata';
import Section from '../../baseComponents/Section';
import { PROFESSIONS } from '../../../utils/gw2-data';
import Presets from '../../baseComponents/Presets';
import GW2Select from './GW2Select';
import { changeExtras } from '../../../state/slices/extras';

const ExtrasSection = ({ profession, data }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  let extrasPresets;
  if (profession) {
    const { eliteSpecializations } = PROFESSIONS.find((entry) => entry.profession === profession);
    extrasPresets = data.presetExtras.list.filter((preset) => {
      return (
        preset.profession === null ||
        preset.profession === profession ||
        eliteSpecializations.includes(preset.profession)
      );
    });
  }

  const onTemplateClickExtras = React.useCallback(
    (index) => (event) => {
      if (index < 0) return;

      const newExtras = JSON.parse(extrasPresets[index].value);
      dispatch(changeExtras(newExtras));
    },
    [dispatch, extrasPresets],
  );

  return (
    <Section
      title={t('Runes & Sigils & Food')}
      content={
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
      }
      extraInfo={
        <>
          {profession !== '' && (
            <Presets data={extrasPresets} handleClick={onTemplateClickExtras} />
          )}
        </>
      }
    />
  );
};

export default React.memo(ExtrasSection);
