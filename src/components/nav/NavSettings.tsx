import {
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import type { TFunction } from 'i18next';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { stopCalc } from '../../state/async/calculationThunks';
import { stopCalculationParallel } from '../../state/optimizer-parallel/calculate';
import { useAppDispatch } from '../../state/redux-hooks';
import {
  changeHeuristics,
  changeHwThreads,
  changeIncludeScenarioDataInCharacters,
  changeMulticore,
  getDefaultHwThreads,
  getHeuristics,
  getHwThreadsString,
  getIncludeScenarioDataInCharacters,
  getMulticore,
  getSelectedTemplate,
  parseHwThreads,
} from '../../state/slices/controlsSlice';
import {
  changeDefaultStatInfusions,
  getDefaultStatInfusions,
} from '../../state/slices/localUserSettings';
import type { GameMode } from '../../state/slices/userSettings';
import {
  changeExpertMode,
  changeGameMode,
  getExpertMode,
  getGameMode,
} from '../../state/slices/userSettings';
import LanguageSelection from '../baseComponents/LanguageSelection';
import Settings from '../baseComponents/Settings';
import ReapplyTemplateDialog from './ReapplyTemplateDialog';

const useStyles = makeStyles()((theme) => ({
  divider: {
    marginTop: theme.spacing(1),
  },
}));

const SETTINGS_STORAGE_KEY = 'globalSettings';

export const GAME_MODES = (t: TFunction) => [
  { value: 'fractals', label: t('Fractals') },
  { value: 'raids', label: t('Raids/Strikes') },
  { value: 'wvw', label: t('WvW') },
];

export default function NavSettings() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { classes } = useStyles();

  const { i18n } = useTranslation();
  const { language } = i18n;

  const expertMode = useSelector(getExpertMode);
  const gameMode = useSelector(getGameMode);
  const defaultStatInfusions = useSelector(getDefaultStatInfusions);
  const selectedTemplate = useSelector(getSelectedTemplate);
  const hwThreadsString = useSelector(getHwThreadsString);
  const defaultHwThreads = useSelector(getDefaultHwThreads);
  const enableMulticore = useSelector(getMulticore);
  const enableHeuristics = useSelector(getHeuristics);
  const includeScenarioDataInCharacters = useSelector(getIncludeScenarioDataInCharacters);

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  // save user settings to localStorage
  React.useEffect(() => {
    const settings = JSON.stringify({ expertMode, gameMode, language });
    console.log(`saving... ${settings}`);

    localStorage.setItem(SETTINGS_STORAGE_KEY, settings);
  }, [expertMode, gameMode, language]);

  const { error: hwThreadsError } = parseHwThreads(hwThreadsString);

  return (
    <Settings maxWidth={350}>
      <Typography variant="h6" sx={{ width: 300 }}>
        <Trans>Global Settings</Trans>
      </Typography>
      {__COMMIT_HASH__ && (
        <Typography variant="caption" color="textSecondary">
          Optimizer version: {__COMMIT_HASH__}
        </Typography>
      )}

      <Divider className={classes.divider} />

      <FormControlLabel
        control={
          <Switch
            checked={expertMode}
            onChange={(e) => {
              dispatch(stopCalc);
              dispatch(changeExpertMode(e.target.checked));
            }}
            name="checked"
            color="primary"
          />
        }
        label={t('Expert Mode')}
      />

      <FormControlLabel
        control={
          <Switch
            checked={defaultStatInfusions === '18'}
            onChange={(e) => {
              dispatch(changeDefaultStatInfusions(e.target.checked ? '18' : ''));
            }}
            color="primary"
          />
        }
        label={t('Default to 18 stat infusions in new tabs')}
        slotProps={{ typography: { variant: 'caption' } }}
      />

      <Divider className={classes.divider} />

      <LanguageSelection />

      <FormControl sx={{ minWidth: 150 }} size="small" variant="standard">
        <FormLabel id="gamemode-button-group">
          <Trans>Game Mode</Trans>
        </FormLabel>

        <RadioGroup
          aria-labelledby="gamemode-select-label"
          value={gameMode}
          onChange={(e) => {
            const newGameMode = e.target.value as GameMode;
            dispatch(changeGameMode(newGameMode));

            const isFractalsNew = newGameMode === 'fractals';
            const isFractalsOld = gameMode === 'fractals';
            const isFractalsChanged = isFractalsNew !== isFractalsOld;
            if (isFractalsChanged && selectedTemplate && selectedTemplate.length > 0) setOpen(true);
          }}
          color="primary"
        >
          {GAME_MODES(t).map(({ value, label }) => (
            <FormControlLabel key={value} value={value} control={<Radio />} label={label} />
          ))}
        </RadioGroup>
      </FormControl>
      <ReapplyTemplateDialog open={open} handleClose={handleClose} />

      <Divider className={classes.divider} />

      <TextField
        label={t('Calculation CPU Threads')}
        helperText={t('Number of threads to run in parallel')}
        placeholder={String(defaultHwThreads)}
        size="small"
        value={hwThreadsString}
        error={hwThreadsError}
        onChange={(e) => dispatch(changeHwThreads(e.target.value))}
        slotProps={{
          htmlInput: { inputMode: 'numeric', pattern: '[0-9]*' },
          input: {
            // used to always display the placeholder value instead of the label
            // eslint-disable-next-line react/jsx-no-useless-fragment
            startAdornment: <></>,
          },
        }}
      />

      <Divider className={classes.divider} />

      <FormControlLabel
        control={
          <Checkbox
            onChange={(e) => {
              if (!enableMulticore) {
                dispatch(stopCalc);
              } else {
                // workers.forEach(({ worker }) => worker.postMessage({ type: STOP }));
                dispatch(stopCalculationParallel);
              }

              const newMulticore = e.target.checked;
              dispatch(changeMulticore(newMulticore));
            }}
          />
        }
        label={t('Enable experimental Rust/WebAssembly mode')}
        checked={enableMulticore}
      />
      <FormControlLabel
        control={
          <Checkbox
            onChange={(e) => {
              const newHeuristics = e.target.checked;
              dispatch(changeHeuristics(newHeuristics));
            }}
          />
        }
        label={t('Enable heuristics')}
        sx={{ display: 'none' }}
        checked={enableHeuristics}
      />
      <FormControlLabel
        control={
          <Checkbox
            onChange={(e) => {
              dispatch(changeIncludeScenarioDataInCharacters(e.target.checked));
            }}
          />
        }
        label={t('Include scenario data in internal character JSON')}
        slotProps={{ typography: { variant: 'caption' } }}
        checked={includeScenarioDataInCharacters}
      />
    </Settings>
  );
}
