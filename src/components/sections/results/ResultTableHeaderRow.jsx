import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Trans } from 'gatsby-plugin-react-i18next';
import { Item } from 'gw2-ui-bulk';
import React from 'react';
import { useSelector } from 'react-redux';
import { getPrimaryInfusion, getSecondaryInfusion } from '../../../state/slices/infusions';
import { getPriority } from '../../../state/slices/priorities';
import { Slots } from '../../../utils/gw2-data';

const ResultTableHeaderRow = ({ classes }) => {
  const wield = useSelector(getPriority('weaponType'));
  const primaryInfusion = useSelector(getPrimaryInfusion);
  const secondaryInfusion = useSelector(getSecondaryInfusion);

  return (
    <TableRow>
      <TableCell className={classes.tablehead}>
        <Trans>Damage</Trans>
      </TableCell>
      {Slots[wield].map((slot) => (
        <TableCell className={classes.tablehead} key={slot.name} align="center" padding="none">
          {slot.short}
        </TableCell>
      ))}
      {primaryInfusion ? (
        <TableCell
          className={classes.tablehead}
          key="primaryInfusion"
          align="center"
          padding="none"
        >
          <Item id={primaryInfusion} disableText disableLink />
        </TableCell>
      ) : null}
      {secondaryInfusion ? (
        <TableCell
          className={classes.tablehead}
          key="secondaryInfusion"
          align="center"
          padding="none"
        >
          <Item id={secondaryInfusion} disableText disableLink />
        </TableCell>
      ) : null}
    </TableRow>
  );
};

export default React.memo(ResultTableHeaderRow);
