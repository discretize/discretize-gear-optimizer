import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classModifiers } from '../../../assets/modifierdata';
import { getProfession } from '../../../state/slices/controlsSlice';
import Section from '../../baseComponents/Section';
import Skills from './Skills';

const SkillsSection = () => {
  const { t } = useTranslation();
  const profession = useSelector(getProfession);

  const skillsData = classModifiers[profession]?.find((section) => section.section === 'Skills');

  return skillsData ? (
    <Section
      title={t('Skills')}
      content={<Skills profession={profession} data={skillsData.items} />}
    />
  ) : null;
};

export default SkillsSection;
