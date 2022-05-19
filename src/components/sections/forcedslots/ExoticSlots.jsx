import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import {
  changeExotic,
  getExoticsData,
  getPriority,
  getExclusionData,
} from '../../../state/slices/priorities';
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

const ExoticSlots = () => {
  const { classes } = useStyles();

  const dispatch = useDispatch();
  const excludedSlots = useSelector(getExclusionData);
  const dualWielded = useSelector(getPriority('weaponType'));
  const affixes = useSelector(getPriority('affixes'));
  const exotics = useSelector(getExoticsData);

  let SLOTS = GEAR_SLOTS;
  if (dualWielded !== WeaponTypes.dualWield) {
    SLOTS = GEAR_SLOTS.slice(0, 13);
  }

  const handleChange = (index, affix) => (event) => {
    dispatch(changeExotic({ index, affix, value: event.target.checked }));
  };

  return (
    <TableContainer>
      <Table className={classes.tableCollapse}>
        <TableHead>
          <TableCell padding="none" />
          {SLOTS.map(({ short }) => (
            <TableCell padding="none" key={`header ${short}`}>
              {short}
            </TableCell>
          ))}
        </TableHead>
        <TableBody>
          {affixes.map((affix) => (
            <TableRow key={affix}>
              <TableCell padding="none">{affix}</TableCell>
              {SLOTS.map(({ short }, index) => (
                <TableCell padding="none" sx={{ padding: 0.3 }} key={affix + short}>
                  <Checkbox
                    size="small"
                    classes={{ root: classes.checkbox }}
                    checked={Boolean(exotics?.[affix]?.[index])}
                    disabled={excludedSlots?.[affix]?.[index]}
                    onChange={handleChange(index, affix)}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ExoticSlots;
