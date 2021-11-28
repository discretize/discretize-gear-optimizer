import {
  Box,
  FormControl,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  Typography,
  withStyles,
} from '@material-ui/core';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { Specialization, Trait, TraitLine } from 'gw2-ui-bulk';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { traitSectionsById } from '../../../assets/modifierdata';
import {
  changeTrait,
  changeTraitLine,
  getShowAllTraits,
  getTraitItems,
  getTraitLines,
  getTraits,
  setTraitModiferAmount,
  toggleTraitModifier,
} from '../../../state/slices/traits';
import CheckboxComponent from '../../baseComponents/CheckboxComponent';
import AmountInput from '../../baseComponents/AmountInput';

const styles = (theme) => ({
  formControl: {
    minWidth: 120,
    margin: theme.spacing(1),
  },
  item: { lineHeight: '1 !important' },
});

/**
 * @param {object} props
 * @param {object} props.classes
 * @param {Array} props.data         Contains all the data regarding modifiers, ids and extra subtexts
 */
const Traits = ({ classes, data = [] }) => {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  // selected trait lines
  const traitlines = useSelector(getTraitLines);
  // 2D array: traits[n] is the n-th selected trait line. So the trait id in traitlines[i] has the selected values traits[i]
  const selectedTraits = useSelector(getTraits);
  // all the currently applied modifiers
  const items = useSelector(getTraitItems);

  const showAll = useSelector(getShowAllTraits);
  const hiddenCss = showAll ? { opacity: 0.5 } : { display: 'none' };

  // Handles a change from one traitline to another.
  const handleTraitlineChange = (index) => (e) => {
    const newTraitLine = e.target.value;
    dispatch(changeTraitLine({ index, newTraitLine }));
  };

  // Handles a change from one trait to another within a traitline.
  const handleTraitChange = (index) => (e) => {
    const { tier, id: newTrait } = e;
    dispatch(changeTrait({ index, tier, newTrait }));
  };

  // handles a modifer's checkbox being toggled on or off.
  // Checkboxes which pop up for selected traits are necessary because some traits contain different conditional values.
  const handleCheckboxChange = (index, id) => (e) => {
    dispatch(toggleTraitModifier({ index, id, enabled: e.target.checked }));
  };

  const handleAmountChange = (index, id) => (e) => {
    dispatch(setTraitModiferAmount({ index, id, amount: e.target.value }));
  };

  return [1, 2, 3].map((lineNr, index) => {
    // hide checkboxes for minor traits without configuration or subtext
    const checkboxModis = [];
    const noCheckboxModis = [];
    traitSectionsById[Number(traitlines[index])]?.items.forEach((itemData) => {
      const { minor, subText, amountData } = itemData;
      if (minor && !subText && !amountData) {
        noCheckboxModis.push(itemData);
      } else {
        checkboxModis.push(itemData);
      }
    });

    const key = `traitNr${lineNr}`;
    return (
      <React.Fragment key={key}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor={key}>{t('Traitline', { lineNr })}</InputLabel>
          <Select
            value={traitlines[index]}
            input={<Input name={t(`Traitline`, { lineNr })} id={key} />}
            onChange={handleTraitlineChange(index)}
            renderValue={(selected) => (
              <Specialization id={selected} disableLink className={classes.item} />
            )}
          >
            {data
              .map((line) => line.id)
              .filter(
                (tr) => !traitlines.includes(tr.toString()) || traitlines[index] === tr.toString(),
              )
              .map((id) => (
                <MenuItem key={id} value={id} className={classes.menuItem}>
                  <ListItemText primary={<Specialization id={id} disableLink />} />
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        {traitlines[index] ? (
          <TraitLine
            id={traitlines[index]}
            selectable
            selected={selectedTraits[index]}
            onSelect={handleTraitChange(index)}
          />
        ) : (
          <br />
        )}
        {
          // minor traits that have an effect on the outcome of the optimization
          noCheckboxModis.length > 0 && (
            <div>
              <Trans>Minors:</Trans>{' '}
              {noCheckboxModis.map((itemData) => {
                const { id, gw2id, subText } = itemData;
                return (
                  <React.Fragment key={id}>
                    {gw2id && <Trait id={gw2id} disableLink />}{' '}
                    <Typography variant="caption">{subText}</Typography>
                  </React.Fragment>
                );
              })}{' '}
            </div>
          )
        }
        {
          // Major traits, that the user might want to enable or not
          checkboxModis.map((itemData) => {
            const { id, gw2id, minor, subText, amountData } = itemData;
            const visible = minor || selectedTraits[index].includes(gw2id);
            const enabled = Boolean(items[index][id]);
            const amount = items[index][id]?.amount;
            return (
              <Box
                key={id}
                style={visible ? {} : hiddenCss}
                justifyContent="space-between"
                display="flex"
                maxWidth="648px"
              >
                <Box>
                  <CheckboxComponent
                    value={id}
                    checked={visible && enabled}
                    label={
                      <>
                        {gw2id && <Trait id={gw2id} disableLink />}{' '}
                        <Typography variant="caption">
                          {
                            // i18next-extract-mark-context-next-line {{traitSubText}}
                            t('traitSubText', { context: subText })
                          }
                        </Typography>
                      </>
                    }
                    onChange={handleCheckboxChange(index, id)}
                    disabled={!visible}
                  />
                </Box>

                {amountData ? (
                  <Box>
                    <AmountInput
                      amountData={amountData}
                      handleAmountChange={handleAmountChange(index, id)}
                      value={amount}
                      disabled={!visible || !enabled}
                    />
                  </Box>
                ) : null}
              </Box>
            );
          })
        }
      </React.Fragment>
    );
  });
};

export default withStyles(styles)(Traits);
