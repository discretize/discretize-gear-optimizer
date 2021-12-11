import React from 'react';
import { Profession as ProfessionRaw } from 'gw2-ui-bulk';
import { PROFESSIONS } from '../../utils/gw2-data';

const allEliteSpecs = PROFESSIONS.flatMap((entry) => entry.eliteSpecializations);

// patch gw2-ui Profession to handle non-elite specs
const Profession = ({ name, ...rest }) => {
  const professionProps = allEliteSpecs.includes(name) ? { eliteSpecialization: name } : { name };

  return <ProfessionRaw {...professionProps} {...rest} />;
};

export default React.memo(Profession);
