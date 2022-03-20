import { ConsumableEffect, Item } from '@discretize/gw2-ui-new';
import { HelperIcon } from '@discretize/react-discretize-components';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { extrasTypes } from '../../../../state/slices/extras';
import { INFUSION_IDS, Slots } from '../../../../utils/gw2-data';

const extrasLabels = {
  Sigil1: <Item id={24615} disableLink disableText disableTooltip style={{ fontSize: 18 }} />,
  Sigil2: <Item id={24615} disableLink disableText disableTooltip style={{ fontSize: 18 }} />,
  Runes: <Item id={24836} disableLink disableText disableTooltip style={{ fontSize: 18 }} />,
  Nourishment: (
    <ConsumableEffect disableLink disableText name="Nourishment" style={{ fontSize: 18 }} />
  ),
  Enhancement: (
    <ConsumableEffect disableLink disableText name="Enhancement" style={{ fontSize: 18 }} />
  ),
};

const ResultTableHeaderRow = ({
  classes,
  weaponType = 'Two-handed',
  infusions = {},
  rankBy = 'Damage',
  displayExtras,
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

      {extrasTypes
        .filter((type) => displayExtras[type])
        .map((type, index) => (
          <TableCell
            className={classes.tablehead}
            // eslint-disable-next-line react/no-array-index-key
            key={`extras${index}`}
            align="center"
            padding="none"
          >
            {extrasLabels[type]}
          </TableCell>
        ))}
    </TableRow>
  );
};

export default React.memo(ResultTableHeaderRow);
