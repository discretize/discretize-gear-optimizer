import React from 'react';
import Section from '../../baseComponents/Section';
import Traits from './Traits';

import { classModifiers } from '../../../assets/modifierdata';

const TraitsSection = ({ profession }) => {
  const traitsData = classModifiers[profession.toLowerCase()].find((section) => section.id > 0);

  return (
    <Section
      first
      title="Traits"
      helpText="Select your traits here. Remember to also select the corresponding checkbox
                    below each traitline. This is necessary, because many traits grant conditional
                    bonus stats and you might get different results with different conditional
                    traits."
      content={<Traits data={traitsData} />}
    />
  );
};
export default React.memo(TraitsSection);
