import { Grid2 as Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { changeForcedSlot, getForcedSlots } from '../../../state/slices/forcedSlots';
import { getWeaponType } from '../../../state/slices/priorities';
import { GEAR_SLOTS, WeaponTypes } from '../../../utils/gw2-data';
import AffixesSelect from '../../baseComponents/AffixesSelect';

const ForcedSlots = () => {
  const dispatch = useDispatch();
  const forcedSlots = useSelector(getForcedSlots);
  const weaponType = useSelector(getWeaponType);
  const { t } = useTranslation();

  let SLOTS = GEAR_SLOTS;
  if (weaponType !== WeaponTypes.dualWield) {
    SLOTS = GEAR_SLOTS.slice(0, 13);
  }

  const handleChange = (index) => (event, newInput) => {
    dispatch(changeForcedSlot({ index, value: newInput?.label || null }));
  };

  return (
    <Grid
      container
      direction="row"
      spacing={1}
      sx={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}
    >
      {SLOTS.map((slot, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Grid key={index} size={{ xs: 6, sm: 4, md: 2 }}>
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
