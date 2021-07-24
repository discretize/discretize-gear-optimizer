import React from "react";
import {
  Checkbox,
  FormControl,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  withStyles
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import { Specialization, TraitLine } from "gw2-ui";
import {
  getTraitLines,
  getTraits,
  changeTraits,
  changeTraitLine
} from "../state/gearOptimizerSlice";

const styles = (theme) => ({
  formControl: {
    minWidth: 120,
    margin: theme.spacing.unit
  }
});

// all the trait IDs of available traitlnes for every profession
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

const Traits = ({ classes, profession }) => {
  const dispatch = useDispatch();
  const traitlines = useSelector(getTraitLines);
  const traits = useSelector(getTraits);

  /**
   * Change handler for the multi-selects, where one can select the traitlines that may be used
   * for the calculation.
   * Prevents more than 3 selections at the same time.
   */
  function handleChangeMultipleSelect(e) {
    const val = e.target.value;
    if (val.length > 3) {
      return;
    }
    dispatch(changeTraitLine(val));
  }

  /**
   * Handles the change in individual traitlines for the actual traits.
   *
   * @param id the id of the traitline that experienced a change
   * @param event
   */
  function handleTraitChange(e, id, index) {
    const selected = [...traits[index]];
    selected[e.tier] = e.id;
    dispatch(changeTraits({ index: index, selected: selected }));
  }

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
              <MenuItem key={id} value={id}>
                <Checkbox checked={traitlines.indexOf(id) > -1} />
                <ListItemText>
                  <Specialization id={id} disableLink />
                </ListItemText>
              </MenuItem>
            ))}
        </Select>
      </FormControl>

      {/* Render the actual trait lines  */}
      {/* TODO console error: onUseCallback */}
      {traitlines.map((line, index) => (
        <TraitLine
          id={line}
          key={line}
          selectable
          selected={traits[index]}
          onSelect={(event) => handleTraitChange(event, line, index)}
        />
      ))}
    </>
  );
};

export default withStyles(styles)(Traits);
