import { Profession } from '@discretize/gw2-ui-new';
import { Box, Chip, TextField, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import type { PresetEntry } from 'data/presetdata';
import { getProfession, getSelectedTemplate } from '../../state/slices/controlsSlice';

// this many chips are allowed before they will be put into a dropdown select
const maxChipsDefault = 7;

interface PresetsProps<T extends PresetEntry> {
  className?: string;
  data?: T[];
  handleClick: (value: T) => void;
  presetCategory: string;
  maxChips?: number;
}

function Presets<T extends PresetEntry>({
  className,
  data: dataRaw = [],
  handleClick,
  presetCategory,
  maxChips = maxChipsDefault,
}: PresetsProps<T>) {
  const { t } = useTranslation();
  const profession = useSelector(getProfession);
  const selectedTemplateName = useSelector(getSelectedTemplate);

  const data = dataRaw.filter((entry) => !entry?.hidden);

  return (
    <Box className={className} sx={{ marginTop: 1 }}>
      {data.length > maxChips ? (
        <Autocomplete
          key={`${selectedTemplateName || profession}-presets`}
          options={data}
          getOptionLabel={(preset) => preset.name}
          renderInput={(params) => (
            <TextField {...params} label={t('Presets')} variant="standard" />
          )}
          renderOption={(props, preset) => (
            <li {...props} key={preset.name}>
              {preset.profession ? (
                <Profession
                  disableLink
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
                  disableLink
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
}
export default Presets;
