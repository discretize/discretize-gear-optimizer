import { Divider, FormControlLabel, Switch, Typography } from '@mui/material';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import SagaTypes from '../../state/sagas/sagaTypes';
import { changeExpertMode, getExpertMode } from '../../state/slices/controlsSlice';
import LanguageSelection from '../baseComponents/LanguageSelection';
import Settings from '../baseComponents/Settings';

const useStyles = makeStyles()((theme) => ({
  divider: {
    marginTop: theme.spacing(1),
  },
}));

export default function NavSettings() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { classes } = useStyles();

  const expertMode = useSelector(getExpertMode);

  return (
    <Settings>
      <Typography variant="h6">
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
    </Settings>
  );
}
