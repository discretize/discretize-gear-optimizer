import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import Section from '../../baseComponents/Section';
import ForcedSlots from './ForcedSlots';

const ForcedSlotsSection =  () => {
  const { t } = useTranslation();

  return (
    <Section
      title={t('Forced Slots')}
      content={<ForcedSlots />}
      helpText={
        <p>
          <Trans>
            Lock any gear slots to a specific type to work with what you already have or share gear
            between multiple builds.
          </Trans>
        </p>
      }
    />
  );
};
export default React.memo(ForcedSlotsSection);
