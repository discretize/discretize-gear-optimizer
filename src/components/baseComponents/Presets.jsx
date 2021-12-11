import { Chip, makeStyles, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import classNames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Profession from './Profession';
import { getProfession, getControl } from '../../state/slices/controlsSlice';

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

const Presets = ({ className, data, handleClick, presetCategory }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const profession = useSelector(getProfession);
  const selectedTemplateName = useSelector(getControl('selectedTemplate'));

  return (
    <div className={classNames(className, classes.root)}>
      {data.length > MAX_CHIPS ? (
        <Autocomplete
          key={`${selectedTemplateName || profession}-presets`}
          id="presets"
          options={data}
          getOptionLabel={(preset) => preset.name}
          renderInput={(params) => <TextField {...params} label="Presets" variant="standard" />}
          renderOption={(preset) =>
            preset.profession ? (
              <Profession
                name={preset.profession}
                text={
                  // i18next-extract-mark-context-next-line {{presetName}}
                  t(`preset`, { context: `${presetCategory}_${preset.name}` })
                }
              />
            ) : (
              // i18next-extract-mark-context-next-line {{presetName}}
              t(`preset`, { context: `${presetCategory}_${preset.name}` })
            )
          }
          blurOnSelect
          disableClearable
          clearOnBlur={false}
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
                  name={preset.profession}
                  text={
                    // i18next-extract-mark-context-next-line {{presetName}}
                    t(`preset`, { context: `${presetCategory}_${preset.name}` })
                  }
                />
              ) : (
                // i18next-extract-mark-context-next-line {{presetName}}
                t(`preset`, { context: `${presetCategory}_${preset.name}` })
              )
            }
            variant="outlined"
            onClick={() => handleClick(preset)}
            className={classes.templateChip}
          />
        ))
      )}
    </div>
  );
};
export default Presets;
