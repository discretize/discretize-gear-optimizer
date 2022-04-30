import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changePriority,
  getExclusionsEnabled,
  getPriority,
} from '../../../state/slices/priorities';
import AffixesSelect from '../../baseComponents/AffixesSelect';
import ExcludedSlots from '../forcedslots/ExcludedSlots';

export default function Affixes() {
  const dispatch = useDispatch();
  const affixes = useSelector(getPriority('affixes'));
  const exclusionsEnabled = useSelector(getExclusionsEnabled);

  return (
    <>
      <AffixesSelect
        multiple
        onChange={(event, value) => {
          dispatch(changePriority({ key: 'affixes', value: value.map((option) => option.label) }));
        }}
        value={affixes}
      />
      {exclusionsEnabled && <ExcludedSlots />}
    </>
  );
}
