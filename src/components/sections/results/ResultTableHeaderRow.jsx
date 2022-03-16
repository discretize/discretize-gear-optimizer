import { ConsumableEffect, Item } from '@discretize/gw2-ui-new';
import { HelperIcon } from '@discretize/react-discretize-components';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { INFUSION_IDS, Slots } from '../../../utils/gw2-data';

const ResultTableHeaderRow = ({
  classes,
  weaponType = 'Two-handed',
  infusions = {},
  rankBy = 'Damage',
}) => {
  const { t } = useTranslation();

  return (
    <TableRow>
      <TableCell className={classes.tablehead} align="center" padding="none">
        <HelperIcon
          text={t('Click the star icon to save a result for comparison.')}
          fontSize="1rem"
        />
      </TableCell>
      <TableCell className={classes.tablehead}>
        {t('priorityGoal', {
          context: rankBy,
        })}
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

      <TableCell className={classes.tablehead} align="center" padding="none">
        <Item id={24836} disableLink disableText disableTooltip style={{ fontSize: 18 }} />
      </TableCell>
      <TableCell className={classes.tablehead} align="center" padding="none">
        <ConsumableEffect disableLink disableText name="Nourishment" style={{ fontSize: 18 }} />
      </TableCell>
      <TableCell className={classes.tablehead} align="center" padding="none">
        <ConsumableEffect disableLink disableText name="Enhancement" style={{ fontSize: 18 }} />
      </TableCell>
    </TableRow>
  );
};

export default React.memo(ResultTableHeaderRow);
