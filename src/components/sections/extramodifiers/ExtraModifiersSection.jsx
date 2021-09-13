import React from 'react';
import Section from '../../baseComponents/Section';
import ExtraModifiers from './ExtraModifiers';

const ExtraModifiersSection = () => {
  return (
    <Section
      title="Extra Modifiers"
      helpText={
        <>
          Allows adding arbitrary extra modifiers. The textbox expects valid JSON formatting. For
          multiple modifiers please use a list. For more information visit the github repository.
        </>
      }
      content={<ExtraModifiers />}
    />
  );
};
export default React.memo(ExtraModifiersSection);
