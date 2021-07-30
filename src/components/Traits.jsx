import {
  FormControl,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  Typography,
  withStyles
} from "@material-ui/core";
import { Specialization, Trait, TraitLine } from "gw2-ui";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addModifier,
  changeTraitLine,
  changeTraits,
  getModifiers,
  getTraitLines,
  getTraits,
  removeModifier,
  removeTraitModifierWithGW2id
} from "../state/gearOptimizerSlice";
import CheckboxComponent from "./baseComponents/CheckboxComponent";

const styles = (theme) => ({
  formControl: {
    minWidth: 120,
    margin: theme.spacing(1)
  },
  root: {
    marginBottom: theme.spacing(2)
  },
  item: { lineHeight: "1 !important" }
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

  const handleTraitlineSelect = (index) => (event) => {
    dispatch(changeTraitLine({ index, value: event.target.value.toString() }));
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
          source: line
        })
      );
    } else {
      dispatch(removeModifier(trait.id));
    }
  };

  return (
    <div className={classes.root}>
      {[1, 2, 3].map((lineNr, index) => {
        const name = "traitNr" + lineNr;
        return (
          <React.Fragment key={name}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor={name}>Traitline {lineNr}</InputLabel>
              <Select
                value={traitlines[index]}
                input={<Input name={"Traitline " + lineNr} id={name} />}
                onChange={handleTraitlineSelect(index)}
                renderValue={(selected) => {
                  return <Specialization id={selected} disableLink className={classes.item} />;
                }}
              >
                {traitsAll
                  .find((tr) => tr.profession === profession)
                  .traits.filter(
                    (tr) =>
                      !traitlines.includes(tr.toString()) || traitlines[index] === tr.toString()
                  )
                  .map((v) => (
                    <MenuItem key={v} value={v} className={classes.menuItem}>
                      <ListItemText primary={<Specialization id={v} disableLink />} />
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            {/* Render the actual trait lines  */}
            {/* TODO console error: onUseCallback */}
            <TraitLine
              id={traitlines[index]}
              selectable
              selected={traits[index]}
              onSelect={(event) => handleTraitChange(event, traitlines[index], index)}
            />

            {traits[index].map((t) => {
              const matching = data.find((v) => v.id === Number(traitlines[index]));
              if (typeof matching === "undefined") return null;
              return matching.items
                .filter((v) => v.gw2_id === t)
                .map((trait) => (
                  <div key={trait.id}>
                    <CheckboxComponent
                      value={trait.id}
                      checked={modifiers.filter((m) => m.id === trait.id).length > 0}
                      label={
                        <>
                          <Trait id={trait.gw2_id} disableLink />{" "}
                          <Typography variant="caption">{trait.subText}</Typography>
                        </>
                      }
                      onChange={handleModifierChange(trait, traitlines[index])}
                    />
                  </div>
                ));
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default withStyles(styles)(Traits);
