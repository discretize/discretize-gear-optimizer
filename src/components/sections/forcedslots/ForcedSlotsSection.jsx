import React from 'react';
import Section from '../../baseComponents/Section';
import ForcedSlots from './ForcedSlots';

const ForcedSlotsSection = () => {
  return <Section title="Forced Slots" content={<ForcedSlots />} />;
};
export default React.memo(ForcedSlotsSection);
