import {
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Switch,
  Typography,
} from '@mui/material';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import SagaTypes from '../../state/sagas/sagaTypes';
import { getSelectedTemplate } from '../../state/slices/controlsSlice';
import {
  changeExpertMode,
  changeGameMode,
  getExpertMode,
  getGameMode,
} from '../../state/slices/userSettings';
import { PARAMS, setQueryParm } from '../../utils/queryParam';
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
    setQueryParm({ key: PARAMS.GAMEMODE, value: newGameMode });
    dispatch(changeGameMode(newGameMode));

    const isFractalsNew = newGameMode === 'fractals';
    const isFractalsOld = gameMode === 'fractals';
    const isFractalsChanged = isFractalsNew !== isFractalsOld;
    if (isFractalsChanged && selectedTemplate && selectedTemplate.length > 0) setOpen(true);
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
    </Settings>
  );
}
