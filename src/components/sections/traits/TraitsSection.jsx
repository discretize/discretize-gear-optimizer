import { FormControlLabel, Switch } from '@material-ui/core';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classModifiers } from '../../../assets/modifierdata';
import { getShowAllTraits, toggleShowAll, changeTraits } from '../../../state/slices/traits';
import { changeSkills } from '../../../state/slices/skills';
import Section from '../../baseComponents/Section';
import Traits from './Traits';
import { PROFESSIONS } from '../../../utils/gw2-data';
import Presets from '../../baseComponents/Presets';

const TraitsSection = ({ profession, data }) => {
  const dispatch = useDispatch();
  const showAll = useSelector(getShowAllTraits);

  const { t } = useTranslation();
  const traitsData = classModifiers[profession.toLowerCase()]?.filter((section) => section.id > 0);

  let traitsPresets;
  if (profession) {
    const { eliteSpecializations } = PROFESSIONS.find((entry) => entry.profession === profession);
    traitsPresets = data.presetTraits.list.filter((preset) => {
      return preset.profession === null || eliteSpecializations.includes(preset.profession);
    });
  }

  const onTemplateClickTraits = React.useCallback(
    (index) => (event) => {
      if (index < 0) return;

      const newTraits = JSON.parse(traitsPresets[index].traits);
      dispatch(changeTraits(newTraits));

      const newSkills = JSON.parse(traitsPresets[index].skills);
      dispatch(changeSkills(newSkills));
    },
    [dispatch, traitsPresets],
  );

  return (
    <Section
      first
      title={t('Traits')}
      helpText={t(
        'Select your traits here. Remember to also select the corresponding checkbox below each traitline. This is necessary, because many traits grant conditional bonus stats and you might get different results with different conditional traits.',
      )}
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
            <Presets data={traitsPresets} handleClick={onTemplateClickTraits} />
          )}
        </>
      }
    />
  );
};
export default React.memo(TraitsSection);
