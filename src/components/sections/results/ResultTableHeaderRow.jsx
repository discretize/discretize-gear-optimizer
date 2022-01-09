import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Item } from 'gw2-ui-bulk';
import React from 'react';
import { INFUSION_IDS, Slots } from '../../../utils/gw2-data';
import HelperIcon from '../../baseComponents/HelperIcon';

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
    </TableRow>
  );
};

export default React.memo(ResultTableHeaderRow);
