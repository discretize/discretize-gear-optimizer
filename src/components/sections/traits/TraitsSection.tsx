import { Box, FormControlLabel, Switch } from '@mui/material';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { type PresetTraitsEntry } from '../../../assets/presetdata/metadata';
import { getProfession } from '../../../state/slices/controlsSlice';
import { changeSkills } from '../../../state/slices/skills';
import { changeTraits, getShowAllTraits, toggleShowAll } from '../../../state/slices/traits';
import data from '../../../utils/data';
import { SPECIALIZATIONS } from '../../../utils/gw2-data';
import Presets from '../../baseComponents/Presets';
import Section from '../../baseComponents/Section';
import Traits from './Traits';

const TraitsSection = () => {
  const dispatch = useDispatch();
  const showAll = useSelector(getShowAllTraits);
  const profession = useSelector(getProfession);

  const { t } = useTranslation();

  let traitsPresets;
  if (profession) {
    const eliteSpecializations = SPECIALIZATIONS[profession];
    traitsPresets = data.presetTraits.list.filter((preset) => {
      return (
        !preset.profession ||
        preset.profession === profession ||
        eliteSpecializations.includes(preset.profession)
      );
    });
  }

  const onTemplateClickTraits = React.useCallback(
    (value: PresetTraitsEntry) => {
      if (!value) return;

      const newTraits = JSON.parse(value.traits);
      dispatch(changeTraits(newTraits));

      const newSkills = JSON.parse(value.skills);
      dispatch(changeSkills(newSkills));
    },
    [dispatch],
  );

  return (
    <Section
      first
      title={t('Traits')}
      helpText={
        <>
          <Trans>
            Select your traits, then select and customize the trait bonuses you want to simulate
            using the checkboxes below each line. Many bonuses are conditional and may not apply to
            your setup.
          </Trans>
          <Box component="span" sx={{ mt: 1, display: 'block' }} />

          <Trans>
            Only the bonuses with checkboxes are applied here, so be sure to change the Skill
            Coefficients section when changing to/from traits without checkboxes like Lingering
            Curse or Legendary Lore for accurate results.
          </Trans>
        </>
      }
      content={<Traits />}
      extraInfo={
        <>
          <FormControlLabel
            control={
              <Switch
                checked={showAll}
                onChange={(e) => dispatch(toggleShowAll(e.target.checked))}
                name="checked"
                color="primary"
              />
            }
            label={t('Show all implemented modifier effects')}
          />
          {profession !== '' && (
            <Presets
              data={traitsPresets}
              handleClick={onTemplateClickTraits}
              presetCategory="trait"
            />
          )}
        </>
      }
    />
  );
};
export default React.memo(TraitsSection);
