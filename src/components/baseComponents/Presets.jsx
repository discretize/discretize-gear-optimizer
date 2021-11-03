import { Chip, makeStyles, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import classNames from 'classnames';
import { Profession } from 'gw2-ui-bulk';
import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { firstUppercase } from '../../utils/usefulFunctions';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
  },
  templateChip: {
    margin: theme.spacing(0.5),
  },
}));

// this many chips are allowed before they will be put into a dropdown select
const MAX_CHIPS = 6;

const Presets = ({ className, data, handleClick }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classNames(className, classes.root)}>
      {data.length > MAX_CHIPS ? (
        <Autocomplete
          id="presets"
          options={data}
          getOptionLabel={(preset) => preset.name}
          renderInput={(params) => <TextField {...params} label="Presets" variant="standard" />}
          renderOption={(preset) =>
            preset.profession ? (
              <Profession
                eliteSpecialization={firstUppercase(preset.profession)}
                text={t(preset.name)}
              />
            ) : (
              t(preset.name)
            )
          }
          onChange={(event, value) => handleClick(value)}
        />
      ) : (
        data.map((preset) => (
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
                t(preset.name)
              )
            }
            variant="outlined"
            onClick={handleClick(preset)}
            className={classes.templateChip}
          />
        ))
      )}
    </div>
  );
};
export default Presets;
