import React from "react";
import {
  Checkbox,
  FormControl,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  withStyles,
  Typography
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import CheckboxComponent from "./baseComponents/CheckboxComponent";
import { Specialization, TraitLine, Trait } from "gw2-ui";
import {
  getTraitLines,
  getTraits,
  changeTraits,
  changeTraitLine,
  getModifiers,
  addModifier,
  removeModifier,
  removeTraitModifierWithGW2id,
  removeTraitModifiersWithTraitlineId
} from "../state/gearOptimizerSlice";

const styles = (theme) => ({
  formControl: {
    minWidth: 120,
    margin: theme.spacing.unit
  }
});

// all the trait IDs of available traitlnes for every profession
{
  /* TODO refactor this away! all the data is contained in the data props already! */
}
const traitsAll = [
  {
    profession: "Warrior",
    traits: [4, 11, 22, 36, 51, 18, 61]
  },
  {
    profession: "Revenant",
    traits: [3, 9, 12, 14, 15, 52, 63]
  },
  {
    profession: "Guardian",
    traits: [13, 16, 42, 46, 49, 27, 62]
  },
  {
    profession: "Ranger",
    traits: [8, 25, 30, 32, 33, 5, 55]
  },
  {
    profession: "Engineer",
    traits: [6, 21, 29, 38, 47, 43, 57]
  },
  {
    profession: "Elementalist",
    traits: [17, 26, 31, 37, 41, 48, 56]
  },
  {
    profession: "Mesmer",
    traits: [1, 10, 23, 24, 45, 40, 59]
  }
];

/**
 *
 * @param {String} profession   the profession for which to display trait lines
 * @param {Object} data         Contains all the data regarding modifiers, ids and extra subtexts
 * @returns
 */
const Traits = ({ classes, profession, data }) => {
  const dispatch = useDispatch();

  // selected trait lines
  const traitlines = useSelector(getTraitLines);
  // 2D array: traits[n] is the n-th selected trait line. So the trait id in traitlines[i] has the selected values traits[i]
  const traits = useSelector(getTraits);
  // all the currently applied modifiers
  const modifiers = useSelector(getModifiers);

  /**
   * Change handler for the multi-selects, where one can select the traitlines that may be used
   * for the calculation.
   * Prevents more than 3 selections at the same time.
   */
  function handleChangeMultipleSelect(e) {
    const val = e.target.value.map((i) => Number(i));
    if (val.length > 3) {
      return;
    }

    // find out which line was removed and clear the correspondign modifiers
    for (let l in traitlines) {
      if (val.indexOf(traitlines[l]) < 0 && traitlines[l] !== 0) {
        // trait line was removed, flush modifiers
        dispatch(removeTraitModifiersWithTraitlineId(traitlines[l]));
      }
    }
    dispatch(changeTraitLine(val));
  }

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
    dispatch(changeTraits({ index: index, selected: selected }));
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
        addModifier({
          id: trait.id,
          modifiers: trait.modifiers,
          gw2_id: trait.gw2_id,
          line: line
        })
      );
    } else {
      dispatch(removeModifier(trait.id));
    }
  };

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="mutiple-checkbox-label">Traitlines</InputLabel>
        <Select
          id="mutiple-checkbox"
          multiple
          value={traitlines}
          onChange={handleChangeMultipleSelect}
          input={<Input />}
          renderValue={(selected) =>
            selected.map((id) => (
              <React.Fragment key={"s_" + id}>
                <Specialization id={id} disableLink />{" "}
              </React.Fragment>
            ))
          }
        >
          {traitsAll
            .filter((elem) => elem.profession === profession)[0]
            .traits.map((e) => e.toString())
            .map((id) => (
              <MenuItem key={id} value={Number(id)}>
                <Checkbox checked={traitlines.indexOf(Number(id)) > -1} />
                <ListItemText>
                  <Specialization id={Number(id)} disableLink />
                </ListItemText>
              </MenuItem>
            ))}
        </Select>
      </FormControl>

      {/* Render the actual trait lines  */}
      {/* TODO console error: onUseCallback */}
      {traitlines.map((line, index) => (
        <React.Fragment key={line}>
          <TraitLine
            id={line}
            selectable
            selected={traits[index]}
            onSelect={(event) => handleTraitChange(event, line, index)}
          />
          {traits[index].map((t) =>
            data
              .filter((v) => v.id === line)[0]
              .items.filter((v) => v.gw2_id === t)
              .map((trait) => (
                <CheckboxComponent
                  value={trait.id}
                  checked={modifiers.filter((m) => m.id === trait.id).length > 0}
                  label={<Trait id={trait.gw2_id} disableLink />}
                  onChange={handleModifierChange(trait, line)}
                />
              ))
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default withStyles(styles)(Traits);
