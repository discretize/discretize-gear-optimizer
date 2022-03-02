import { Box, Chip, TextField, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Profession } from '@discretize/gw2-ui-new';
import React from 'react';
import { useSelector } from 'react-redux';
import { getControl, getProfession } from '../../state/slices/controlsSlice';

// this many chips are allowed before they will be put into a dropdown select
const maxChipsDefault = 7;

const Presets = ({
  className,
  data: dataRaw = [],
  handleClick,
  presetCategory,
  maxChips = maxChipsDefault,
}) => {
  const { t } = useTranslation();
  const profession = useSelector(getProfession);
  const selectedTemplateName = useSelector(getControl('selectedTemplate'));

  const data = dataRaw.filter((entry) => !entry?.hidden);

  return (
    <Box className={className} sx={{ marginTop: 1 }}>
      {data.length > maxChips ? (
        <Autocomplete
          key={`${selectedTemplateName || profession}-presets`}
          options={data}
          getOptionLabel={(preset) => preset.name}
          renderInput={(params) => <TextField {...params} label="Presets" variant="standard" />}
          renderOption={(props, preset) => (
            <li {...props}>
              {preset.profession ? (
                <Profession
                  name={preset.profession}
                  text={
                    // i18next-extract-mark-context-next-line {{presetName}}
                    t(`preset`, { context: `${presetCategory}_${preset.name}` })
                  }
                />
              ) : (
                // i18next-extract-mark-context-next-line {{presetName}}
                <Typography>
                  {t(`preset`, { context: `${presetCategory}_${preset.name}` })}
                </Typography>
              )}
            </li>
          )}
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
            sx={{ margin: 0.5 }}
          />
        ))
      )}
    </Box>
  );
};
export default Presets;
