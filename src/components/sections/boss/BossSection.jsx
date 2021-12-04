import React from 'react';

import { useTranslation } from 'gatsby-plugin-react-i18next';
import Section from '../../baseComponents/Section';
import Boss from './Boss';

const BossSection = () => {
  const { t } = useTranslation();

  return <Section title={t('the one with confusion and torment')} content={<Boss />} />;
};

export default React.memo(BossSection);
