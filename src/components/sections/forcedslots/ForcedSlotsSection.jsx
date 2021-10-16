import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import Section from '../../baseComponents/Section';
import ForcedSlots from './ForcedSlots';

const ForcedSlotsSection = () => {
  const { t } = useTranslation();

  return <Section title={t('Forced Slots')} content={<ForcedSlots />} />;
};
export default React.memo(ForcedSlotsSection);
