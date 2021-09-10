import React from 'react';
import { Attribute } from 'gw2-ui-bulk';
import Section from '../../baseComponents/Section';
import ARinput from './ARinput';

const ARSection = ({ first }) => {
  return (
    <Section
      title={
        <>
          <Attribute name="Agony Resistance" disableLink disableText /> Agony Resistance
        </>
      }
      first={first}
      helpText="Adds 150% of your Agony Resistance to Precision, Toughness, and Concentration."
      content={<ARinput />}
    />
  );
};
export default React.memo(ARSection);
