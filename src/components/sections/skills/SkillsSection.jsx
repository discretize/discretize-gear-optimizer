import React from 'react';
import Section from '../../baseComponents/Section';
import Skills from './Skills';

const SkillsSection = ({ profession, data }) => {
  const skillsData = profession
    ? data[profession.toLowerCase()].edges[0].node.list.find((d) => d.section === 'Skills')
    : null;

  return skillsData ? (
    <Section title="Skills" content={<Skills profession={profession} data={skillsData.items} />} />
  ) : null;
};

export default SkillsSection;
