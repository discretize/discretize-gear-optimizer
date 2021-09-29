import React from 'react';
import Section from '../../baseComponents/Section';
import Skills from './Skills';

import { classModifiers } from '../../../assets/modifierdata';

const SkillsSection = ({ profession }) => {

  const skillsData = classModifiers[profession.toLowerCase()].find(
    (section) => section.section === 'Skills',
  );

  return skillsData ? (
    <Section title="Skills" content={<Skills profession={profession} data={skillsData.items} />} />
  ) : null;
};

export default SkillsSection;
