import { Chip, withStyles } from "@material-ui/core";
import { Profession } from "gw2-ui";
import React from "react";

const styles = (theme) => ({
  templateChip: {
    margin: theme.spacing(1)
  }
});

const Presets = ({ classes, data, handleClick }) => {
  return (
    <div>
      {data.map((preset, index) => (
        <Chip
          id={preset.name}
          key={preset.name}
          label={
            preset.profession ? (
              <Profession eliteSpecialization={preset.profession} text={preset.name} />
            ) : (
              preset.name
            )
          }
          variant="outlined"
          onClick={handleClick(index)}
          className={classes.templateChip}
        />
      ))}
    </div>
  );
};
export default withStyles(styles)(Presets);
