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
} from '../../../state/slices/traits';
import CheckboxComponent from '../../baseComponents/CheckboxComponent';

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

  const handleTraitlineSelect = (index) => (event) => {
    if (Number(traitlines[index]) > 0) {
      // remove previously selected modifiers
      dispatch(removeTraitModifierWithSource(Number(traitlines[index])));
    }
    const newTraitLine = event.target.value;

    // distinct minors are minor traits where no selection is necessary because the buffs
    // they provide are not ambigous or conditional
    const distinctMinors = data
      .find((section) => section.id === newTraitLine)
      .items.filter((item) => item.minor === true && !item.subText);

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
  };

  /**
   * Handles the change in individual traitlines for the actual traits.
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
   * Handles the checkboxes, which pop up for selected traits. This is necessary because some traits contain different conditional values.
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

  return [1, 2, 3].map((lineNr, index) => {
    const checkboxModis = [];

    const distinctMinors = data.find((section) => section.id === Number(traitlines[index]));
    const distinctMinorsWithSub = distinctMinors
      ? distinctMinors.items.filter((item) => item.minor === true && item.subText)
      : [];

    checkboxModis.push(...distinctMinorsWithSub);

    const minorCheckboxModis = [];

    const distinctMinorsWithoutSub = distinctMinors
      ? distinctMinors.items.filter((item) => item.minor === true && !item.subText)
      : [];

    minorCheckboxModis.push(...distinctMinorsWithoutSub);

    traits[index].forEach((trait) => {
      const matchingSection = data.find((section) => section.id === Number(traitlines[index]));
      if (typeof matchingSection === 'undefined') return null;

      const matchingItems = matchingSection.items.filter((item) => item.gw2id === trait);
      checkboxModis.push(...matchingItems);
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

        {checkboxModis.map((trait) => (
          <div key={trait.id}>
            <CheckboxComponent
              value={trait.id}
              checked={modifiers.filter((modifier) => modifier.id === trait.id).length > 0}
              label={
                <>
                  {trait.gw2id && <Trait id={trait.gw2id} disableLink />}{' '}
                  <Typography variant="caption">{trait.subText}</Typography>
                </>
              }
              onChange={handleModifierChange(trait, traitlines[index])}
            />
          </div>
        ))}

        {minorCheckboxModis.map((trait) => (
          <div key={trait.id}>
            <>
              {trait.gw2id && <Trait id={trait.gw2id} disableLink />}{' '}
              <Typography variant="caption">{trait.subText}</Typography>
            </>
          </div>
        ))}
      </React.Fragment>
    );
  });
};

export default withStyles(styles)(Traits);
