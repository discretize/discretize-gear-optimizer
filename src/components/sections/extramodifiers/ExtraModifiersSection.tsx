import { Box, Link } from '@mui/material';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
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
            formatting. Multiple modifiers can be entered as an array.
          </Trans>
          <Box component="span" sx={{ mt: 1, display: 'block' }} />
          <Trans>
            For more information,{' '}
            <Link
              href="https://github.com/discretize/discretize-gear-optimizer/tree/main/docs/Contributing/Data%20Format"
              target="_blank"
              rel="noopener"
            >
              see the data format documentation on Github
            </Link>{' '}
            or ask in Discord!
          </Trans>
        </>
      }
      content={<ExtraModifiers />}
    />
  );
};
export default React.memo(ExtraModifiersSection);
