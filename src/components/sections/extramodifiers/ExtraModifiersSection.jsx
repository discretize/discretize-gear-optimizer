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
            Allows adding arbitrary extra modifiers. The textbox expects valid JSON formatting. For
            multiple modifiers please use a list. For more information visit the github repository.
          </Trans>
        </>
      }
      content={<ExtraModifiers />}
    />
  );
};
export default React.memo(ExtraModifiersSection);
