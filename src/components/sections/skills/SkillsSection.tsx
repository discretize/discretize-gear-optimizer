import { classModifiers } from 'data/modifierdata';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfession } from '../../../state/slices/controlsSlice';
import Section from '../../baseComponents/Section';
import Skills from './Skills';

const SkillsSection = () => {
  const { t } = useTranslation();
  const profession = useSelector(getProfession);

  if (!profession) return null;

  const skillsData = classModifiers[profession]?.find((section) => section.section === 'Skills');

  return skillsData ? (
    <Section title={t('Skills')} content={<Skills data={skillsData.items} />} />
  ) : null;
};

export default SkillsSection;
