import { FormControlLabel, Switch } from '@mui/material';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classModifiers } from '../../../assets/modifierdata';
import { changeSkills } from '../../../state/slices/skills';
import { changeTraits, getShowAllTraits, toggleShowAll } from '../../../state/slices/traits';
import { PROFESSIONS } from '../../../utils/gw2-data';
import Presets from '../../baseComponents/Presets';
import Section from '../../baseComponents/Section';
import Traits from './Traits';

const TraitsSection = ({ profession, data }) => {
  const dispatch = useDispatch();
  const showAll = useSelector(getShowAllTraits);

  const { t } = useTranslation();
  const traitsData = classModifiers[profession]?.filter((section) => section.id > 0);

  let traitsPresets;
  if (profession) {
    const { eliteSpecializations } = PROFESSIONS.find((entry) => entry.profession === profession);
    traitsPresets = data.presetTraits.list.filter((preset) => {
      return (
        preset.profession === null ||
        preset.profession === profession ||
        eliteSpecializations.includes(preset.profession)
      );
    });
  }

  const onTemplateClickTraits = React.useCallback(
    (value) => {
      if (value === null) return;

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
          <p>
            <Trans>
              Select your traits, then select and customize the trait bonuses you want to simulate
              using the checkboxes below each line. Many bonuses are conditional and may not apply
              to your setup.
            </Trans>
          </p>
          <p>
            <Trans>
              Only the bonuses with checkboxes are applied here, so be sure to change the Skill
              Coefficients section when changing to/from traits without checkboxes like Lingering
              Curse or Legendary Lore for accurate results.
            </Trans>
          </p>
        </>
      }
      content={<Traits data={traitsData} />}
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
            label={t('Show all possible modifiers')}
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
