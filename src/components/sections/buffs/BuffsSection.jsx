import React from 'react';
import { useDispatch } from 'react-redux';
import { replaceBuffs } from '../../../state/slices/buffs';
import Presets from '../../baseComponents/Presets';
import Section from '../../baseComponents/Section';
import Buffs from './Buffs';

const BuffsSection = ({ data }) => {
  const dispatch = useDispatch();

  const handleTemplateClickBuffs = React.useCallback(
    (index) => (event) => {
      const state = JSON.parse(data.presetBuffs.list[index].value);
      dispatch(replaceBuffs(state));
    },
    [data.presetBuffs.list, dispatch],
  );

  return (
    <Section
      title="Buffs & Boons"
      extraInfo={<Presets data={data.presetBuffs.list} handleClick={handleTemplateClickBuffs} />}
      content={<Buffs />}
    />
  );
};
export default React.memo(BuffsSection);
