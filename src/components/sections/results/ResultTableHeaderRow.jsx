import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Trans } from 'gatsby-plugin-react-i18next';
import { Item } from 'gw2-ui-bulk';
import React from 'react';
import { useSelector } from 'react-redux';
import { getInfusions } from '../../../state/slices/infusions';
import { Slots, INFUSION_IDS } from '../../../utils/gw2-data';

const ResultTableHeaderRow = ({ classes, weaponType }) => {
  const infusions = useSelector(getInfusions);

  return (
    <TableRow>
      <TableCell className={classes.tablehead}>
        <Trans>Damage</Trans>
      </TableCell>
      {Slots[weaponType].map((slot) => (
        <TableCell className={classes.tablehead} key={slot.name} align="center" padding="none">
          {slot.short}
        </TableCell>
      ))}
      {infusions.primaryInfusion ? (
        <TableCell
          className={classes.tablehead}
          key="primaryInfusion"
          align="center"
          padding="none"
        >
          <Item id={INFUSION_IDS[infusions.primaryInfusion]} disableText disableLink />
        </TableCell>
      ) : null}
      {infusions.secondaryInfusion ? (
        <TableCell
          className={classes.tablehead}
          key="secondaryInfusion"
          align="center"
          padding="none"
        >
          <Item id={INFUSION_IDS[infusions.secondaryInfusion]} disableText disableLink />
        </TableCell>
      ) : null}
    </TableRow>
  );
};

export default React.memo(ResultTableHeaderRow);
