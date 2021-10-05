import {
  FormControl,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  Typography,
  withStyles,
} from '@material-ui/core';
import { Specialization, Trait, TraitLine } from 'gw2-ui-bulk';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTraitModifier,
  changeTraitLine,
  changeTraits,
  getTraitLines,
  getTraitModifiers,
  getTraits,
  removeTraitModifier,
  removeTraitModifierWithGW2id,
  removeTraitModifierWithSource,
  setTraitModiferAmount,
} from '../../../state/slices/traits';
import CheckboxComponent from '../../baseComponents/CheckboxComponent';
import TraitAmount from './TraitAmount';

const styles = (theme) => ({
  formControl: {
    minWidth: 120,
    margin: theme.spacing(1),
  },
  item: { lineHeight: '1 !important' },
});

/**
 *
 * @param {String} profession   the profession for which to display trait lines
 * @param {Object} data         Contains all the data regarding modifiers, ids and extra subtexts
 * @returns
 */
const Traits = ({ classes, data }) => {
  const dispatch = useDispatch();

  // selected trait lines
  const traitlines = useSelector(getTraitLines);
  // 2D array: traits[n] is the n-th selected trait line. So the trait id in traitlines[i] has the selected values traits[i]
  const traits = useSelector(getTraits);
  // all the currently applied modifiers
  const modifiers = useSelector(getTraitModifiers);

  /**
   * Handles a change from one traitline to another.
   */
  const handleTraitlineSelect = (index) => (event) => {
    if (Number(traitlines[index]) > 0) {
      // remove previously selected modifiers
      dispatch(removeTraitModifierWithSource(Number(traitlines[index])));
    }
    const newTraitLine = event.target.value;

    const allModifiers = data.find((section) => section.id === newTraitLine).items;

    // distinct minors are minor traits where no selection is necessary because the buffs
    // they provide are not ambigous or conditional
    const distinctMinors = allModifiers.filter(
      (item) => item.minor === true && !item.subText && !item.amount,
    );

    distinctMinors.forEach((minor) =>
      dispatch(
        addTraitModifier({
          id: minor.id,
          gw2id: minor.gw2id,
          source: newTraitLine,
        }),
      ),
    );

    dispatch(changeTraitLine({ index, value: newTraitLine.toString() }));

    allModifiers.forEach((item) => {
      if (item.defaultEnabled) {
        dispatch(
          addTraitModifier({
            id: item.id,
            gw2id: item.gw2id,
            source: Number(newTraitLine),
          }),
        );
      }
    })


  };

  /**
   * Handles a change from one trait to another within a traitline.
   *
   * @param event
   * @param id the gw2-id of the traitline that experienced a change
   * @param index the index of the traitline, that was changed (corresponds to id = traits[index])
   */
  function handleTraitChange(e, id, index) {
    const selected = [...traits[index]];
    // remove modifiers before we dispatch the trait change
    dispatch(removeTraitModifierWithGW2id(selected[e.tier]));
    selected[e.tier] = e.id;
    dispatch(changeTraits({ index, selected }));
  }

  /**
   * Handles a modifer's checkbox being toggled on or off.
   *
   * Checkboxes which pop up for selected traits are necessary because some traits contain different conditional values.
   *
   * @param {Object} trait The trait object, that experienced a change
   * @param {Number} line the trait line, which the modifier corresponds to
   * @returns null
   */
  const handleModifierChange = (trait, line) => (e) => {
    if (e.target.checked) {
      dispatch(
        addTraitModifier({
          id: trait.id,
          gw2id: trait.gw2id,
          source: Number(line),
        }),
      );
    } else {
      dispatch(removeTraitModifier(trait.id));
    }
  };

  const handleAmountChange = (item, trait, line) => (e) => {
    console.log(`amount ${item.id} (${trait}, ${line}) changed to ${e.target.value}`);

    dispatch(setTraitModiferAmount({ amountText: e.target.value, modifier: item }));
  };

  return [1, 2, 3].map((lineNr, index) => {
    const selectedTraitIds = traits[index];

    const allModifiers =
      data.find((section) => section.id === Number(traitlines[index]))?.items || [];

    const checkboxModis = [];
    const noCheckboxModis = [];

    // always show minor trait variants; show variants of selected major traits
    allModifiers.forEach((item) => {
      if (item.minor) {
        if (!item.subText && !item.amount) {
          noCheckboxModis.push(item);
        } else {
          checkboxModis.push(item);
        }
      } else if (selectedTraitIds.includes(item.gw2id)) {
        checkboxModis.push(item);
      }
    });

    const name = `traitNr${lineNr}`;
    return (
      <React.Fragment key={name}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor={name}>Traitline {lineNr}</InputLabel>
          <Select
            value={traitlines[index]}
            input={<Input name={`Traitline ${lineNr}`} id={name} />}
            onChange={handleTraitlineSelect(index)}
            renderValue={(selected) => {
              return <Specialization id={selected} disableLink className={classes.item} />;
            }}
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

        <TraitLine
          id={traitlines[index]}
          selectable
          selected={traits[index]}
          onSelect={(event) => handleTraitChange(event, traitlines[index], index)}
        />

        {noCheckboxModis.map((trait) => (
          <div key={trait.id}>
            <>
              {trait.gw2id && <Trait id={trait.gw2id} disableLink />}{' '}
              <Typography variant="caption">{trait.subText}</Typography>
            </>
          </div>
        ))}

        {checkboxModis.map((item) => (
          <div key={item.id}>
            <CheckboxComponent
              value={item.id}
              checked={modifiers.filter((modifier) => modifier.id === item.id).length > 0}
              label={
                <>
                  {item.gw2id && <Trait id={item.gw2id} disableLink />}{' '}
                  <Typography variant="caption">{item.subText}</Typography>
                </>
              }
              onChange={handleModifierChange(item, traitlines[index])}
            />
            {item.amount ? (
              <TraitAmount
                traitData={item}
                handleAmountChange={handleAmountChange(item, item.gw2id, traitlines[index])}
                value={modifiers.find((mod) => mod.id === item.id)?.amountText}
              />
            ) : null}
          </div>
        ))}
      </React.Fragment>
    );
  });
};

export default withStyles(styles)(Traits);
