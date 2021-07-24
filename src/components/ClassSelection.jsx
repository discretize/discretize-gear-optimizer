import React from "react";
import { Button, withStyles } from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import { changeProfession, getProfession } from "../state/gearOptimizerSlice";

import { Profession } from "gw2-ui";
import { PROFESSIONS } from "./GearOptimizer";

const styles = (theme) => ({
  [theme.breakpoints.up("970")]: {
    buttonGroup: {
      borderRadius: 0,
      "&> *:last-child": {
        borderRadius: "0px 5px 5px 0",
        borderLeft: 0
      },
      "&> *:first-child": {
        borderRadius: "5px 0 0 5px",
        borderRight: 0
      },
      "&> *:not(:first-child):not(:last-child)": {
        borderLeft: 0,
        borderRight: 0
      }
    }
  },
  button: {
    borderRadius: 0,
    paddingLeft: theme.spacing.unit * 1.5,
    paddingRight: theme.spacing.unit * 1.5
  },
  [theme.breakpoints.down("970")]: {
    button: {
      width: 160
    }
  }
});

const ClassSelection = ({ classes }) => {
  const dispatch = useDispatch();
  const profession = useSelector(getProfession);

  return (
    <div className={classes.buttonGroup}>
      {PROFESSIONS.map((elem) => (
        <Button
          variant="outlined"
          color="primary"
          size="medium"
          style={
            elem === profession ? { backgroundColor: "currentcolor" } : { borderColor: "inherit" }
          }
          className={classes.button}
          onClick={() => dispatch(changeProfession(elem))}
          key={elem}
        >
          <Profession name={elem} disableLink />
        </Button>
      ))}
    </div>
  );
};

export default withStyles(styles)(ClassSelection);
