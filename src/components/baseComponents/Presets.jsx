import { Chip, withStyles } from '@material-ui/core';
import { Profession } from 'gw2-ui-bulk';
import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { firstUppercase } from '../../utils/usefulFunctions';

const styles = (theme) => ({
  templateChip: {
    margin: theme.spacing(0.5),
  },
});

const Presets = ({ classes, data, handleClick }) => {
  const { t } = useTranslation();
  return data.map((preset, index) => (
    <Chip
      id={preset.name}
      key={preset.name}
      label={
        preset.profession ? (
          <Profession
            eliteSpecialization={firstUppercase(preset.profession)}
            text={t(preset.name)}
          />
        ) : (
          preset.name
        )
      }
      variant="outlined"
      onClick={handleClick(index)}
      className={classes.templateChip}
    />
  ));
};
export default withStyles(styles)(Presets);
