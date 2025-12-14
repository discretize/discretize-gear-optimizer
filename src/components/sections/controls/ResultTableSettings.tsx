import { Attribute } from '@discretize/gw2-ui-new';
import { HelperIcon } from '@discretize/react-discretize-components';
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
import type { FilterMode } from '../../../state/slices/controlsSlice';
import {
  changeCompareByPercent,
  changeDisplayAttributes,
  changeFilterMode,
  changeHighlightDiffering,
  changeSavedHeader,
  changeTallTable,
  getCompareByPercent,
  getDisplayAttributes,
  getFilterMode,
  getHighlightDiffering,
  getSavedHeader,
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
  const highlightDiffering = useSelector(getHighlightDiffering);

  const tallTable = useSelector(getTallTable);
  const savedHeader = useSelector(getSavedHeader);
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

      <Box sx={{ mt: 1.5 }}>
        <FormControlLabel
          control={
            <Switch
              checked={savedHeader}
              onChange={(e) => dispatch(changeSavedHeader(e.target.checked))}
              name="checked"
              color="primary"
            />
          }
          label={t('Show saved results table header')}
          classes={{ label: classes.comparisonLabel }}
        />
      </Box>

      <Box sx={{ mt: 1.5 }}>
        <FormControlLabel
          control={
            <Switch
              checked={highlightDiffering}
              onChange={(e) => dispatch(changeHighlightDiffering(e.target.checked))}
              name="checked"
              color="primary"
            />
          }
          label={
            <>
              {t('Highlight differing gear')}{' '}
              <HelperIcon
                text={t(
                  'Colors gear slots by whether they are the same as or different than the currently selected build. Useful for creating multiple builds that share some equipment.',
                )}
              />
            </>
          }
          classes={{ label: classes.comparisonLabel }}
        />
      </Box>

      <Box>
        <Autocomplete
          multiple
          disableCloseOnSelect
          value={displayAttributes}
          options={
            [
              'Toughness',
              'Boon Duration',
              'Health',
              'Critical Chance',
              'Condition Duration',
            ] as const
          }
          onChange={(event, value) => dispatch(changeDisplayAttributes(value))}
          renderInput={(params) => (
            <TextField {...params} variant="standard" label={t('Show Attributes')} margin="dense" />
          )}
          renderOption={(props, option, { selected }) => (
            <li {...props} key={option}>
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
            onChange={(e) => dispatch(changeFilterMode(e.target.value as FilterMode))}
            name="checked"
            color="primary"
          >
            {(
              [
                ['None', t('No Filtering')],
                ['Combinations', t('All Combinations')],
                ['Sigils', t('Sigils')],
                ['Runes', t('Runes')],
                ['Relics', t('Relics')],
                ['Nourishment', t('Food')],
                ['Enhancement', t('Utility')],
              ] satisfies [FilterMode, string][]
            ).map(([value, label]) => (
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
