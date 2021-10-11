import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { Attribute } from 'gw2-ui-bulk';
import React from 'react';
import Section from '../../baseComponents/Section';
import ARinput from './ARinput';

const ARSection = ({ first }) => {
  const { t } = useTranslation();

  return (
    <Section
      title={
        <>
          <Attribute name="Agony Resistance" disableLink disableText />{' '}
          <Trans>Agony Resistance</Trans>
        </>
      }
      first={first}
      helpText={t('Adds 150% of your Agony Resistance to Precision, Toughness, and Concentration.')}
      content={<ARinput />}
    />
  );
};
export default React.memo(ARSection);
