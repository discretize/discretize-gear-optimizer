import React from "react";
import {
  Checkbox,
  FormControl, Input,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  withStyles
} from "@material-ui/core";

import { Specialization, TraitLine } from "gw2-ui";

const styles = (theme) => ({
  formControl: {
    minWidth: 120,
    margin: theme.spacing.unit,
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

class Traits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      traits: [
        {
          id: 0,
          select: [0, 0, 0]
        },
        {
          id: 0,
          select: [0, 0, 0]
        },
        {
          id: 0,
          select: [0, 0, 0]
        }
      ]
    };
  }


  /**
   * Change handler for the multi-selects, where one can select the traitlines that may be used
   * for the calculation.
   * Prevents more than 3 selections at the same time.
   */
  handleChangeMultipleSelect = (event) => {
    const newVals = event.target.value;
    if (newVals.length < 4) {
      const selectedTraitLines = [];
      newVals.forEach((id, index) => {
        selectedTraitLines[index] = {
          id,
          // preserves previous state of existing traitlines
          select:
            this.state.traits.filter((elem) => elem.id === id).length === 1
              ? this.state.traits.filter((elem) => elem.id === id)[0].select
              : [0, 0, 0]
        };
      });
      this.setState({ traits: selectedTraitLines });
    }
  };

  /**
   * Handles the change in individual traitlines for the actual traits.
   *
   * @param id the id of the traitline that experienced a change
   * @param event
   */
  handleTraitChange = (id, event) => {
    // { tier: number, id: number, index: number }
    const { traits } = this.state;
    const changedTraits = [];
    traits.forEach((elem) => {
      if (elem.id === Number(id)) {
        changedTraits.push({
          id,
          select: elem.select.map((value, index) =>
            index === event.tier ? event.id : value
          )
        });
      } else {
        changedTraits.push(elem);
      }
    });

    this.setState({ traits: changedTraits });

    // set callback ref in parent component
    this.props.traits(changedTraits);
  };

  render() {
    const { traits } = this.state;

    return (
      <>
        <FormControl className={this.props.classes.formControl}>
          <InputLabel id="mutiple-checkbox-label">Traitlines</InputLabel>
          <Select
            id="mutiple-checkbox"
            multiple
            value={traits.filter((elem) => elem.id > 0).map((st) => st.id)}
            onChange={this.handleChangeMultipleSelect}
            input={<Input />}
            renderValue={(selected) =>
              selected.map((id) => (
                <React.Fragment key={"s_" + id }>
                  <Specialization id={id} disableLink />{" "}
                </React.Fragment>
              ))}
          >
            {traitsAll
              .filter((elem) => elem.profession === this.props.profession)[0]
              .traits.map((id) => (
                <MenuItem key={id} value={id}>
                  <Checkbox
                    checked={traits.map((st) => st.id).indexOf(id) > -1}
                  />
                  <ListItemText>
                    <Specialization id={id} disableLink />
                  </ListItemText>
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        { /* Render the actual trait lines  */}
        { /* TODO console error: onUseCallback*/ }
        {traits.filter(line => line.id > 0).map(line => (
          <TraitLine id={line.id}
                     key={line.id}
                     selectable
                     selected={line.select}
                     onSelect={(event) => this.handleTraitChange(line.id, event)} />
        ))}
      </>
    );
  }
}

export default withStyles(styles)(Traits);