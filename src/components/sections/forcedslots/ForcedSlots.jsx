import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
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

  return (
    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
      {SLOTS.map((slot, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Grid item xs={6} sm={4} md={2} key={index}>
          <AffixesSelect
            // i18next-extract-mark-context-next-line {{slotName}}
            name={t('slotName', { context: slot.name })}
            onChange={handleChange(index)}
            value={forcedSlots[index]}
          />
        </Grid>
      ))}
    </Grid>
  );
};
export default ForcedSlots;
