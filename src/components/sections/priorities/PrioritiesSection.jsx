import React from 'react';
import { useDispatch } from 'react-redux';
import { changePriority } from '../../../state/gearOptimizerSlice';
import Section from '../../baseComponents/Section';
import Presets from '../../baseComponents/Presets';
import Priorities from './Priorities';

const PrioritiesSection = ({ data }) => {
  const dispatch = useDispatch();

  const handleTemplateClickPriorities = React.useCallback(
    (index) => (event) => {
      const state = JSON.parse(data.presetAffixes.list[index].value);
      Object.keys(state).forEach((key) => dispatch(changePriority({ key, value: state[key] })));
    },
    [data.presetAffixes.list, dispatch],
  );

  return (
    <Section
      title="Priorities"
      content={<Priorities />}
      extraInfo={
        <Presets data={data.presetAffixes.list} handleClick={handleTemplateClickPriorities} />
      }
    />
  );
};
export default React.memo(PrioritiesSection);
