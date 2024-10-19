import { Attribute, ConsumableEffect, Item } from '@discretize/gw2-ui-new';
import { HelperIcon } from '@discretize/react-discretize-components';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { extrasTypes } from '../../../../state/slices/extras';
import { INFUSION_IDS, allSlotData, maxSlotsLength } from '../../../../utils/gw2-data';

const extrasLabels = {
  Sigil1: <Item id={24615} disableLink disableText disableTooltip style={{ fontSize: 18 }} />,
  Sigil2: <Item id={24615} disableLink disableText disableTooltip style={{ fontSize: 18 }} />,
  Runes: <Item id={24836} disableLink disableText disableTooltip style={{ fontSize: 18 }} />,
  Relics: <Item id={100916} disableLink disableText disableTooltip style={{ fontSize: 18 }} />,
  Nourishment: (
    <ConsumableEffect disableLink disableText name="Nourishment" style={{ fontSize: 18 }} />
  ),
  Enhancement: (
    <ConsumableEffect disableLink disableText name="Enhancement" style={{ fontSize: 18 }} />
  ),
};

const ResultTableHeaderRow = ({
  classes,
  cx,
  weaponType = 'Two-handed',
  infusions = {},
  rankBy = 'Damage',
  displayExtras,
  displayAttributes,
}) => {
  const { t } = useTranslation();

  const emptyCell = <TableCell className={cx(classes.tablehead)} align="center" padding="none" />;
  const padCellArray = (minLength, array) => {
    const resultArray =
      array.length < minLength
        ? [...array, ...Array(minLength - array.length).fill(emptyCell)]
        : array;

    // eslint-disable-next-line react/no-array-index-key
    return resultArray.map((element, i) => <Fragment key={i}>{element}</Fragment>);
  };

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
      {padCellArray(
        maxSlotsLength,
        allSlotData[weaponType].map((slot) => (
          <TableCell
            className={cx(classes.tablehead, classes.gearColumn)}
            align="center"
            padding="none"
          >
            {slot.short}
          </TableCell>
        )),
      )}
      {padCellArray(
        2,
        Object.keys(infusions).map((type) => (
          <TableCell
            className={cx(classes.tablehead, classes.infusionColumn)}
            align="center"
            padding="none"
          >
            <Item id={INFUSION_IDS[type]} disableText disableLink />
          </TableCell>
        )),
      )}

      {padCellArray(
        extrasTypes.length,
        extrasTypes
          .filter((type) => displayExtras[type])
          .map((type) => (
            <TableCell
              className={cx(classes.tablehead, classes.extrasColumn)}
              align="center"
              padding="none"
            >
              {extrasLabels[type]}
            </TableCell>
          )),
      )}

      {displayAttributes.map((attribute) => (
        <TableCell
          className={cx(classes.tablehead, classes.attributesColumn)}
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
