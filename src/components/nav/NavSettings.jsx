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
import {
  changeExpertMode,
  changeGameMode,
  getExpertMode,
  getGameMode,
} from '../../state/slices/controlsSlice';
import LanguageSelection from '../baseComponents/LanguageSelection';
import Settings from '../baseComponents/Settings';

const useStyles = makeStyles()((theme) => ({
  divider: {
    marginTop: theme.spacing(1),
  },
}));

const GAME_MODES = (t) => [
  { value: 'fractals', label: t('Fractals') },
  { value: 'r-aids', label: t('R-Aids/Strikes') },
];

export default function NavSettings() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { classes } = useStyles();

  const expertMode = useSelector(getExpertMode);
  const gameMode = useSelector(getGameMode);

  return (
    <Settings maxWidth={400}>
      <Typography variant="h6" sx={{ width: 300 }}>
        <Trans>Global Settings</Trans>
      </Typography>
      <Divider className={classes.divider} />
      <FormControlLabel
        control={
          <Switch
            checked={expertMode}
            onChange={(e) => {
              dispatch({ type: SagaTypes.Stop });
              dispatch(changeExpertMode(e.target.checked));
            }}
            name="checked"
            color="primary"
          />
        }
        label={t('Expert')}
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
          onChange={(event) => dispatch(changeGameMode(event.target.value))}
          color="primary"
        >
          {GAME_MODES(t).map(({ value, label }) => (
            <FormControlLabel key={value} value={value} control={<Radio />} label={label} />
          ))}
        </RadioGroup>
      </FormControl>
    </Settings>
  );
}
