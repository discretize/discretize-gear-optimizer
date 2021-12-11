import { Link } from '@material-ui/core';

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
          <p>
            <Trans>
              Allows adding arbitrary extra modifiers. The textbox expects valid YAML or JSON
              formatting. Multiple modifiers can be entered as an array.
            </Trans>
          </p>
          <p>
            <Trans>
              For more information,{' '}
              <Link
                href="https://github.com/discretize/discretize-gear-optimizer/tree/staging/docs/Contributing/Data%20Format"
                target="_blank"
                rel="noopener"
              >
                see the data format documentation on Github
              </Link>{' '}
              or ask in Discord!
            </Trans>
          </p>
        </>
      }
      content={<ExtraModifiers />}
    />
  );
};
export default React.memo(ExtraModifiersSection);
