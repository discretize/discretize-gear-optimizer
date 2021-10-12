import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import Section from '../../baseComponents/Section';
import ExtraModifiers from './ExtraModifiers';

const ExtraModifiersSection = () => {
  const { t } = useTranslation();

  return (
    <Section
      title={t('Extra Modifiers')}
      helpText={
        <>
          <Trans>
            Allows adding arbitrary extra modifiers. The textbox expects valid YAML or JSON
            formatting. Multiple modifiers can be entered as an array. For more information visit
            the GitHub repository.
          </Trans>
        </>
      }
      content={<ExtraModifiers />}
    />
  );
};
export default React.memo(ExtraModifiersSection);
