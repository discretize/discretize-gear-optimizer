import React from 'react';
import Section from '../../baseComponents/Section';
import Infusions from './Infusions';

const InfusionsSection = () => {
  return (
    <Section
      title="Stat Infusions"
      content={<Infusions />}
      helpText={
        <>Select up to 2 types of stat infusions, and optionally limit the quantity allowed.</>
      }
    />
  );
};
export default React.memo(InfusionsSection);
