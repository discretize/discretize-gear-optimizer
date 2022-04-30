import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../../baseComponents/Section';
import Priorities from './Priorities';

const PrioritiesSection = () => {
  const { t } = useTranslation();
  return <Section title={t('Priorities')} content={<Priorities />} />;
};
export default React.memo(PrioritiesSection);
