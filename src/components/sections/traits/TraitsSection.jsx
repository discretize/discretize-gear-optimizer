import { FormControlLabel, Switch } from '@material-ui/core';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classModifiers } from '../../../assets/modifierdata';
import { getShowAllTraits, toggleShowAll } from '../../../state/slices/traits';
import Section from '../../baseComponents/Section';
import Traits from './Traits';

const TraitsSection = ({ profession }) => {
  const dispatch = useDispatch();
  const showAll = useSelector(getShowAllTraits);

  const { t } = useTranslation();
  const traitsData = classModifiers[profession.toLowerCase()].filter((section) => section.id > 0);

  return (
    <Section
      first
      title={t('Traits')}
      helpText={t(
        'Select your traits here. Remember to also select the corresponding checkbox below each traitline. This is necessary, because many traits grant conditional bonus stats and you might get different results with different conditional traits.',
      )}
      content={<Traits data={traitsData} />}
      extraInfo={
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
      }
    />
  );
};
export default React.memo(TraitsSection);
