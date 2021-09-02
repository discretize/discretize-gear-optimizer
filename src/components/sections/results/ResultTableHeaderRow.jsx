import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Item } from 'gw2-ui-bulk';
import { useSelector } from 'react-redux';
import { Slots } from '../../../utils/gw2-data';
import {
  getPriority,
  getInfusions,
} from '../../../state/gearOptimizerSlice';

const ResultTableHeaderRow = ({classes}) => {
  const wield = useSelector(getPriority('weaponType'));
  const infusions = useSelector(getInfusions);

  return (
    <TableRow>
      <TableCell className={classes.tablehead}>Damage</TableCell>
      {Slots[wield].map((slot) => (
        <TableCell className={classes.tablehead} key={slot.name} align="center" padding="none">
          {slot.short}
        </TableCell>
      ))}
      {infusions.primaryInfusion && (
        <TableCell
          className={classes.tablehead}
          key="primaryInfusion"
          align="center"
          padding="none"
        >
          <Item id={infusions.primaryInfusion} disableText disableLink />
        </TableCell>
      )}
      {infusions.secondaryInfusion && (
        <TableCell
          className={classes.tablehead}
          key="secondaryInfusion"
          align="center"
          padding="none"
        >
          <Item id={infusions.secondaryInfusion} disableText disableLink />
        </TableCell>
      )}
    </TableRow>
  );
};

export default React.memo(ResultTableHeaderRow);