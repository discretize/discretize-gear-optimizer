import { Attribute, ConsumableEffect, Item } from '@discretize/gw2-ui-new';
import { HelperIcon } from '@discretize/react-discretize-components';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
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
  displayAttributes,
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
        <TableCell
          className={classNames(classes.tablehead, classes.gearColumn)}
          key={slot.name}
          align="center"
          padding="none"
        >
          {slot.short}
        </TableCell>
      ))}
      {Object.keys(infusions).map((type) => (
        <TableCell
          className={classNames(classes.tablehead, classes.infusionColumn)}
          key={type}
          align="center"
          padding="none"
        >
          <Item id={INFUSION_IDS[type]} disableText disableLink />
        </TableCell>
      ))}

      {extrasTypes
        .filter((type) => displayExtras[type])
        .map((type, index) => (
          <TableCell
            className={classNames(classes.tablehead, classes.extrasColumn)}
            // eslint-disable-next-line react/no-array-index-key
            key={`extras${index}`}
            align="center"
            padding="none"
          >
            {extrasLabels[type]}
          </TableCell>
        ))}

      {displayAttributes.map((attribute, index) => (
        <TableCell
          className={classNames(classes.tablehead, classes.attributesColumn)}
          // eslint-disable-next-line react/no-array-index-key
          key={`attrs${index}`}
          align="center"
          padding="none"
        >
          <Attribute name={attribute} disableLink disableText style={{ fontSize: 18 }} />
        </TableCell>
      ))}
    </TableRow>
  );
};

export default React.memo(ResultTableHeaderRow);
