import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
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
import { getBuildTemplateData, templateTransform } from '../../assets/presetdata/templateTransform';
import SagaTypes from '../../state/sagas/sagaTypes';
import {
  getProfession,
  getSelectedTemplate,
  setBuildTemplate,
} from '../../state/slices/controlsSlice';
import {
  changeExpertMode,
  changeGameMode,
  getExpertMode,
  getGameMode,
} from '../../state/slices/userSettings';
import data from '../../utils/data';
import { PARAMS, setQueryParm } from '../../utils/queryParam';
import LanguageSelection from '../baseComponents/LanguageSelection';
import Settings from '../baseComponents/Settings';

const useStyles = makeStyles()((theme) => ({
  divider: {
    marginTop: theme.spacing(1),
  },
}));

const SETTINGS_STORAGE_KEY = 'globalSettings';

export const GAME_MODES = (t) => [
  { value: 'fractals', label: t('Fractals') },
  { value: 'raids', label: t('Raids/Strikes') },
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
  const profession = useSelector(getProfession);

  const [open, setOpen] = React.useState(false);

  const isFractals = gameMode === 'fractals';

  const handleAcceptTemplateReapply = () => {
    const buildTemplateData = getBuildTemplateData({ selectedTemplate, isFractals, profession });
    dispatch(setBuildTemplate(buildTemplateData));

    setOpen(false);
  };

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
    if (selectedTemplate && selectedTemplate.length > 0) setOpen(true);
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
          </FormControl>{' '}
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              <Trans>Reapply template?</Trans>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <Trans>
                  Would you like to apply the {isFractals ? 'fractal' : 'raid'} version of your
                  current template? This will overwrite your current form selections.
                </Trans>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>
                <Trans>Decline</Trans>
              </Button>
              <Button onClick={handleAcceptTemplateReapply} autoFocus variant="outlined">
                <Trans>Accept</Trans>
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </Settings>
  );
}
