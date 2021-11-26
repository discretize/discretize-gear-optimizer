import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Trans } from 'gatsby-plugin-react-i18next';
import { Item } from 'gw2-ui-bulk';
import React from 'react';
import { Slots, INFUSION_IDS } from '../../../utils/gw2-data';

const ResultTableHeaderRow = ({ classes, weaponType, infusions = {} }) => {
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
      {Object.keys(infusions).map((type) => (
        <TableCell className={classes.tablehead} key={type} align="center" padding="none">
          <Item id={INFUSION_IDS[type]} disableText disableLink />
        </TableCell>
      ))}
    </TableRow>
  );
};

export default React.memo(ResultTableHeaderRow);
