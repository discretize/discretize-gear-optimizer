import { Attribute } from '@discretize/gw2-ui-new';
import CheckIcon from '@mui/icons-material/Check';
import {
  Autocomplete,
  Box,
  Chip,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import {
  changeCompareByPercent,
  changeDisplayAttributes,
  changeFilterMode,
  changeTallTable,
  getCompareByPercent,
  getDisplayAttributes,
  getFilterMode,
  getTallTable,
} from '../../../state/slices/controlsSlice';
import Settings from '../../baseComponents/Settings';

const useStyles = makeStyles()((theme) => ({
  comparisonLabel: {
    fontSize: '1rem',
  },
}));

/**
 * Settings component that displays settings on click for adjusting the table
 */
export default function ResultTableSettings() {
  const { classes } = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const compareByPercent = useSelector(getCompareByPercent);
  const tallTable = useSelector(getTallTable);
  const filterMode = useSelector(getFilterMode);
  const displayAttributes = useSelector(getDisplayAttributes);

  return (
    <Settings maxWidth={360}>
      <Typography sx={{ fontWeight: 700 }}>
        <Trans>Result Display Settings:</Trans>
      </Typography>

      <Box sx={{ mt: 1.5 }}>
        <FormControlLabel
          control={
            <Switch
              checked={compareByPercent}
              onChange={(e) => dispatch(changeCompareByPercent(e.target.checked))}
              name="checked"
              color="primary"
            />
          }
          label={t('Compare by percentage')}
          classes={{ label: classes.comparisonLabel }}
        />
      </Box>

      <Box sx={{ mt: 1.5 }}>
        <FormControlLabel
          control={
            <Switch
              checked={tallTable}
              onChange={(e) => dispatch(changeTallTable(e.target.checked))}
              name="checked"
              color="primary"
            />
          }
          label={t('Increase table height')}
          classes={{ label: classes.comparisonLabel }}
        />
      </Box>

      <Box>
        <Autocomplete
          multiple
          disableCloseOnSelect
          value={displayAttributes}
          options={['Toughness', 'Boon Duration', 'Health', 'Critical Chance']}
          onChange={(event, value) => dispatch(changeDisplayAttributes(value))}
          renderInput={(params) => (
            <TextField {...params} variant="standard" label={t('Show Attributes')} margin="dense" />
          )}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Box sx={{ width: 28 }}>{selected && <CheckIcon sx={{ fontSize: '1rem' }} />}</Box>
              <Attribute name={option} disableLink />
            </li>
          )}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                variant="outlined"
                label={<Attribute name={option} disableLink disableText />}
                {...getTagProps({ index })}
                onDelete={null}
              />
            ))
          }
        />
      </Box>

      <Box sx={{ mt: 2 }}>
        <FormControl>
          <FormLabel id="filter-button-group">
            <Trans>Filter results:</Trans>
          </FormLabel>

          <RadioGroup
            aria-labelledby="filter-button-group"
            value={filterMode}
            onChange={(e) => dispatch(changeFilterMode(e.target.value))}
            name="checked"
            color="primary"
          >
            {[
              ['None', t('No Filtering')],
              ['Combinations', t('All Combinations')],
              ['Sigils', t('Sigils')],
              ['Runes', t('Runes')],
              ['Relics', t('Relics')],
              ['Nourishment', t('Food')],
              ['Enhancement', t('Utility')],
            ].map(([value, label]) => (
              <FormControlLabel
                key={value}
                value={value}
                control={<Radio />}
                label={label}
                classes={{ label: classes.comparisonLabel }}
              />
            ))}
          </RadioGroup>

          <FormHelperText>
            <Trans>
              Displays only the top result for each rune, relic, sigil, food, or utility option or
              each combination of all of the above (up to 100 results).
            </Trans>
          </FormHelperText>
        </FormControl>
      </Box>
    </Settings>
  );
}
