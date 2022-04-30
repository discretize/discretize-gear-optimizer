import React from 'react';
import { HelperIcon } from '@discretize/react-discretize-components';
import {
  Box,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { getForcedSlots } from '../../../state/slices/forcedSlots';
import { changeExclusion, getExclusionData, getPriority } from '../../../state/slices/priorities';
import { GEAR_SLOTS, WeaponTypes } from '../../../utils/gw2-data';

const useStyles = makeStyles()((theme) => ({
  tableCollapse: {
    borderCollapse: 'collapse !important',
    marginBottom: '0px !important',
  },
  checkbox: {
    padding: '6px',
  },
}));

const ExcludedSlots = () => {
  const { classes } = useStyles();

  const dispatch = useDispatch();
  const forcedSlots = useSelector(getForcedSlots);
  const dualWielded = useSelector(getPriority('weaponType'));
  const { t } = useTranslation();
  const affixes = useSelector(getPriority('affixes'));
  const exclusions = useSelector(getExclusionData);

  let SLOTS = GEAR_SLOTS;
  if (dualWielded !== WeaponTypes.dualWield) {
    SLOTS = GEAR_SLOTS.slice(0, 13);
  }

  const handleChange = (index, affix) => (event) => {
    dispatch(changeExclusion({ index, affix, value: event.target.checked }));
  };

  return (
    <Box mt={5}>
      <Typography fontWeight={800}>
        {t('Excluded Affixes')}{' '}
        <HelperIcon
          text={t(
            'Allows you to disable a stat for a gear slot. Example: tick the helmet for the stat x. Stat x will not be ever assigned to the helmet.',
          )}
          size="small"
        />
      </Typography>

      <TableContainer>
        <Table className={classes.tableCollapse}>
          <TableHead>
            <TableCell padding="none" />
            {SLOTS.map((slot, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <TableCell padding="none" key={index}>
                {slot.short}
              </TableCell>
            ))}
          </TableHead>
          <TableBody>
            {affixes.map((affix) => (
              <TableRow key={affix}>
                <TableCell padding="none">{affix}</TableCell>
                {SLOTS.map((slot, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <TableCell padding="none" sx={{ padding: 0.3 }} key={index}>
                    <Checkbox
                      size="small"
                      classes={{ root: classes.checkbox }}
                      checked={Boolean(exclusions?.[affix]?.[index])}
                      disabled={forcedSlots[index] !== null}
                      onChange={handleChange(index, affix)}
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default ExcludedSlots;
