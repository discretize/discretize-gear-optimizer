import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import {
  changeExclusion,
  getExclusionData,
  getForcedSlots,
} from '../../../state/slices/forcedSlots';
import { getPriority } from '../../../state/slices/priorities';
import { GEAR_SLOTS, WeaponTypes } from '../../../utils/gw2-data';

const useStyles = makeStyles()((theme) => ({
  tableCollapse: {
    borderCollapse: 'collapse !important',
    marginBottom: '0px !important',
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
      <Typography>{t('Excluded Affixes (WIP)')}</Typography>
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
              <TableRow>
                <TableCell padding="none">{affix}</TableCell>
                {SLOTS.map((slot, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <TableCell padding="none" key={index}>
                    <Checkbox
                      size="small"
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
