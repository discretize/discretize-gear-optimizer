import React from 'react';
import Section from '../../baseComponents/Section';
import ExtraModifiers from './ExtraModifiers';

const ExtraModifiersSection = () => {
  return (
    <Section
      title="Extra Modifiers"
      helpText={
        <>
          Allows adding arbitrary extra modifiers. The textbox expects valid YAML or JSON formatting. 
          Multiple modifiers can be entered as an array. For more information visit the GitHub repository.
        </>
      }
      content={<ExtraModifiers />}
    />
  );
};
export default React.memo(ExtraModifiersSection);
