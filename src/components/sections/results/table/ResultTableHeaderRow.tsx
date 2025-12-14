import { Attribute, ConsumableEffect, Item } from '@discretize/gw2-ui-new';
import { HelperIcon } from '@discretize/react-discretize-components';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from 'tss-react/mui';
import type { Character } from '../../../../state/optimizer/types/optimizerTypes';
import type { DisplayAttributes } from '../../../../state/slices/controlsSlice';
import type { ExtrasType } from '../../../../state/slices/extras';
import { extrasTypes } from '../../../../state/slices/extras';
import type { IndicatorName } from '../../../../utils/gw2-data';
import { INFUSION_IDS, allSlotData, maxSlotsLength } from '../../../../utils/gw2-data';
import { objectKeys } from '../../../../utils/usefulFunctions';

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

const useStyles = makeStyles()((theme: any) => ({
  tablehead: {
    backgroundColor: theme.palette.background.paper,
  },
  gearColumn: {
    minWidth: '3em',
  },
  infusionColumn: {
    minWidth: '1.8em',
  },
  extrasColumn: {
    minWidth: '2.2em',
  },
  attributesColumn: {
    minWidth: '2.8em',
  },
}));

interface ResultTableHeaderRowProps {
  weaponType: Character['settings']['weaponType'];
  infusions: Character['infusions'];
  rankBy: IndicatorName;
  displayExtras: Record<ExtrasType, boolean>;
  displayAttributes: DisplayAttributes;
}

const ResultTableHeaderRow = ({
  weaponType = 'Two-handed',
  infusions = {},
  rankBy = 'Damage',
  displayExtras,
  displayAttributes,
}: ResultTableHeaderRowProps) => {
  const { t } = useTranslation();
  const { classes, cx } = useStyles();

  const emptyCell = <TableCell className={cx(classes.tablehead)} align="center" padding="none" />;
  const padCellArray = (minLength: number, array: React.ReactNode[]) => {
    const resultArray =
      array.length < minLength
        ? [...array, ...Array(minLength - array.length).fill(emptyCell)]
        : array;

    return (
      <>
        {resultArray.map((element, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Fragment key={i}>{element}</Fragment>
        ))}
      </>
    );
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
        objectKeys(infusions).map((type) => (
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
          key={attribute}
        >
          <Attribute name={attribute} disableLink disableText style={{ fontSize: 18 }} />
        </TableCell>
      ))}
    </TableRow>
  );
};

export default React.memo(ResultTableHeaderRow);
