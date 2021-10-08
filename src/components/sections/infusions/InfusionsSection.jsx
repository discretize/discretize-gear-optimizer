import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import Section from '../../baseComponents/Section';
import Infusions from './Infusions';

const InfusionsSection = () => {
  const { t } = useTranslation();

  return (
    <Section
      title={t('Stat Infusions')}
      content={<Infusions />}
      helpText={
        <>
          <Trans>
            Select up to 2 types of stat infusions, and optionally limit the quantity allowed.
          </Trans>
        </>
      }
    />
  );
};
export default React.memo(InfusionsSection);
