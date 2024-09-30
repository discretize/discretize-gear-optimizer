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
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { stopCalculationParallel } from '../../state/optimizer-parallel/calculate';
import SagaTypes from '../../state/sagas/sagaTypes';
import {
  changeHeuristics,
  changeHwThreads,
  changeMulticore,
  getHeuristics,
  getHwThreads,
  getMulticore,
  getSelectedTemplate,
} from '../../state/slices/controlsSlice';
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

export const GAME_MODES = (t) => [
  { value: 'fractals', label: t('Fractals') },
  { value: 'raids', label: t('Raids/Strikes') },
  { value: 'wvw', label: t('WvW') },
];

export default function NavSettings({
  disableSettings: {
    language: languageDisabled,
    expertMode: expertModeDisabled,
    gameMode: gameModeDisabled,
    threading: threadingDisabled,
  } = {},
}) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { classes } = useStyles();

  const { i18n } = useTranslation();
  const { language } = i18n;

  const expertMode = useSelector(getExpertMode);
  const gameMode = useSelector(getGameMode);
  const selectedTemplate = useSelector(getSelectedTemplate);
  const hwThreads = useSelector(getHwThreads);
  const enableMulticore = useSelector(getMulticore);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const enableHeuristics = useSelector(getHeuristics);

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

  const changeExpertModeHandler = (e) => {
    dispatch({ type: SagaTypes.Stop });
    dispatch(changeExpertMode(e.target.checked));
  };
  const changeGameModeHandler = (e) => {
    const newGameMode = e.target.value;
    dispatch(changeGameMode(newGameMode));

    const isFractalsNew = newGameMode === 'fractals';
    const isFractalsOld = gameMode === 'fractals';
    const isFractalsChanged = isFractalsNew !== isFractalsOld;
    if (isFractalsChanged && selectedTemplate && selectedTemplate.length > 0) setOpen(true);
  };
  const changeHwThreadsHandler = (e) => {
    const newHwThreads = e.target.value;

    // only allow numbers
    if (!newHwThreads.match(/^[0-9]*$/)) {
      return;
    }
    // parse to int
    const newHwThreadsInt = parseInt(newHwThreads, 10);

    dispatch(changeHwThreads(newHwThreadsInt));
  };

  const changeMulticoreHandler = (e) => {
    if (!enableMulticore) {
      dispatch({ type: SagaTypes.Stop });
    } else {
      // workers.forEach(({ worker }) => worker.postMessage({ type: STOP }));
      stopCalculationParallel(dispatch);
    }

    const newMulticore = e.target.checked;
    dispatch(changeMulticore(newMulticore));
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const changeHeuristicsHandler = (e) => {
    const newHeuristics = e.target.checked;
    dispatch(changeHeuristics(newHeuristics));
  };

  return (
    <Settings maxWidth={400}>
      <Typography variant="h6" sx={{ width: 300 }}>
        <Trans>Global Settings</Trans>
      </Typography>
      <Divider className={classes.divider} />
      {!expertModeDisabled && (
        <>
          <FormControlLabel
            control={
              <Switch
                checked={expertMode}
                onChange={changeExpertModeHandler}
                name="checked"
                color="primary"
              />
            }
            label={t('Expert')}
          />
          <Divider className={classes.divider} />
        </>
      )}
      {!languageDisabled && <LanguageSelection />}

      {!gameModeDisabled && (
        <>
          <FormControl sx={{ minWidth: 150 }} size="small" variant="standard">
            <FormLabel id="gamemode-button-group">
              <Trans>Game Mode</Trans>
            </FormLabel>

            <RadioGroup
              aria-labelledby="gamemode-select-label"
              value={gameMode}
              onChange={changeGameModeHandler}
              color="primary"
            >
              {GAME_MODES(t).map(({ value, label }) => (
                <FormControlLabel key={value} value={value} control={<Radio />} label={label} />
              ))}
            </RadioGroup>
          </FormControl>
          <ReapplyTemplateDialog open={open} handleClose={handleClose} />
        </>
      )}

      {!threadingDisabled && (
        <>
          <Divider className={classes.divider} />
          <FormControlLabel
            control={<Checkbox />}
            label={t('Enable experimental multicore processing')}
            sx={{ mb: 3 }}
            checked={enableMulticore}
            onChange={changeMulticoreHandler}
          />

          <TextField
            label={t('Threads')}
            helperText={t('Number of threads to use for calculations')}
            size="small"
            value={hwThreads}
            onChange={changeHwThreadsHandler}
            slotProps={{
              htmlInput: { inputMode: 'numeric', pattern: '[0-9]*' },
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={t('Enable heuristics')}
            sx={{ mb: 3, display: 'none' }}
            checked={enableHeuristics}
            onChange={changeHeuristicsHandler}
          />
        </>
      )}
    </Settings>
  );
}
