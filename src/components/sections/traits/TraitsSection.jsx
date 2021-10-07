import React from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Section from '../../baseComponents/Section';
import Traits from './Traits';
import { getShowAllTraits, toggleShowAll } from '../../../state/slices/traits';

import { classModifiers } from '../../../assets/modifierdata';

const TraitsSection = ({ profession }) => {
  const dispatch = useDispatch();
  const showAll = useSelector(getShowAllTraits);

  const traitsData = classModifiers[profession.toLowerCase()].filter((section) => section.id > 0);

  return (
    <Section
      first
      title="Traits"
      helpText="Select your traits here. Remember to also select the corresponding checkbox
                    below each traitline. This is necessary, because many traits grant conditional
                    bonus stats and you might get different results with different conditional
                    traits."
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
          label="Show all possible modifiers"
        />
      }
    />
  );
};
export default React.memo(TraitsSection);
