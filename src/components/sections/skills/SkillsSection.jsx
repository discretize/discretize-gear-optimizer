import { useTranslation } from 'react-i18next';
import React from 'react';
import { classModifiers } from '../../../assets/modifierdata';
import Section from '../../baseComponents/Section';
import Skills from './Skills';

const SkillsSection = ({ profession }) => {
  const { t } = useTranslation();
  const skillsData = classModifiers[profession]?.find((section) => section.section === 'Skills');

  return skillsData ? (
    <Section
      title={t('Skills')}
      content={<Skills profession={profession} data={skillsData.items} />}
    />
  ) : null;
};

export default SkillsSection;
