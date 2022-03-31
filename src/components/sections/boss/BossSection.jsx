import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../../baseComponents/Section';
import Boss from './Boss';

const BossSection = () => {
  const { t } = useTranslation();

  return (
    <Section
      title={t('Target settings')}
      helpText={t(
        'Relevant for condi optimizations; enter boss attack rate and movement uptime for approximating confusion/torment condition damage.',
      )}
      content={<Boss />}
    />
  );
};

export default React.memo(BossSection);
