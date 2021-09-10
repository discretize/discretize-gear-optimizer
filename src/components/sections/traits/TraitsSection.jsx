import React from 'react';
import Section from '../../baseComponents/Section';
import Traits from './Traits';

const TraitsSection = ({ profession, data }) => {
  return (
    <Section
      first
      title="Traits"
      helpText="Select your traits here. Remember to also select the corresponding checkbox
                    below each traitline. This is necessary, because many traits grant conditional
                    bonus stats and you might get different results with different conditional
                    traits."
      content={
        <Traits
          data={data[profession.toLowerCase()].edges[0].node.list
            .slice(1)
            .filter((line) => line.id > 0)}
        />
      }
    />
  );
};
export default React.memo(TraitsSection);
