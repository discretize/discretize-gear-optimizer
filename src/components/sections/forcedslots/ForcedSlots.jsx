import { Grid } from '@mui/material';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeForcedSlot, getForcedSlots } from '../../../state/slices/forcedSlots';
import { getPriority } from '../../../state/slices/priorities';
import { GEAR_SLOTS } from '../../../utils/gw2-data';
import AffixesSelect from '../../baseComponents/AffixesSelect';

const ForcedSlots = () => {
  const dispatch = useDispatch();
  const forcedSlots = useSelector(getForcedSlots);
  const dualWielded = useSelector(getPriority('weaponType'));
  const { t } = useTranslation();

  let SLOTS = GEAR_SLOTS;
  if (dualWielded !== 'Dual wield') {
    SLOTS = GEAR_SLOTS.slice(0, 13);
  }

  const handleChange = (index) => (event, newInput) => {
    dispatch(changeForcedSlot({ index, value: newInput?.label || null }));
  };

  const input2 = (name, index, offset) => {
    return (
      <Grid item xs={6} md={2} sm={4} key={name}>
        <AffixesSelect
          name={name}
          onChange={handleChange(index + offset)}
          value={forcedSlots[index + offset]}
        />
      </Grid>
    );
  };
  return (
    // i18next-extract-mark-context-start {{slotName}}
    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
      {SLOTS.slice(0, 6).map((slot, index) =>
        input2(t('slotName', { context: slot.name }), index, 0),
      )}
      {SLOTS.slice(6, 10).map((slot, index) =>
        input2(t('slotName', { context: slot.name }), index, 6),
      )}
      {SLOTS.slice(10).map((slot, index) =>
        input2(t('slotName', { context: slot.name }), index, 10),
      )}
    </Grid>
    // i18next-extract-mark-context-stop
  );
};
export default ForcedSlots;
