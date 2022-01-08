import { Box, Button, Chip, FormControlLabel, Switch, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import Cancel from '@mui/icons-material/Cancel';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ErrorIcon from '@mui/icons-material/Error';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import classNames from 'classnames';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { firstUppercase } from 'react-discretize-components';
import { useDispatch, useSelector } from 'react-redux';
import { ABORTED, ERROR, RUNNING, SUCCESS, WAITING } from '../../../state/optimizer/status';
import {
  changeCompareByPercent,
  changeControl,
  changeError,
  getCompareByPercent,
  getControl,
  getError,
} from '../../../state/slices/controlsSlice';
import { getPriority } from '../../../state/slices/priorities';
import ProgressIcon from '../../baseComponents/ProgressIcon';
import URLStateExport from '../../url-state/URLStateExport';

const useStyles = makeStyles()((theme) => ({
  errorText: {
    color: 'red',
  },
  button: {
    margin: theme.spacing(1),
  },
  label: {
    height: 40,
  },
  icon: {
    fontSize: 40,
  },
  containerItem: {
    // borderBottom: `3px solid ${theme.palette.primary.dark}`,
    marginBottom: theme.spacing(2),
    // borderRadius: 20,
    borderColor: theme.palette.primary.main,
  },
  chipIcon: { marginBottom: '-6px !important' },
  comparisonLabel: {
    fontSize: '1rem',
  },
}));

const ControlsBox = ({ profession }) => {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const status = useSelector(getControl('status'));
  const error = useSelector(getError);
  const affixes = useSelector(getPriority('affixes'));

  const compareByPercent = useSelector(getCompareByPercent);

  const onStartCalculate = React.useCallback(
    (e) => {
      if (affixes.length < 1) {
        // no affixes selected, display message
        dispatch(changeError('Please select at least one affix.'));
        dispatch(changeControl({ key: 'status', value: ERROR }));
        return;
      }

      console.log('calculate');

      dispatch(changeError(''));
      dispatch(changeControl({ key: 'status', value: RUNNING }));
      dispatch({
        type: 'START',
      });
    },
    [dispatch, affixes],
  );

  const onCancelCalculate = React.useCallback(
    (e) => {
      dispatch({
        type: 'CANCEL',
      });
      dispatch(changeControl({ key: 'status', value: ABORTED }));
      console.log('cancel button pressed');
    },
    [dispatch],
  );

  let icon;

  switch (status) {
    case SUCCESS:
      icon = <DoneAllIcon fontSize="small" classes={{ root: classes.chipIcon }} />;
      break;
    case WAITING:
    case RUNNING:
      icon = <HourglassEmptyIcon fontSize="small" classes={{ root: classes.chipIcon }} />;
      break;
    case ERROR:
      icon = <ErrorIcon fontSize="small" classes={{ root: classes.chipIcon }} />;
      break;
    default:
      icon = null;
  }

  return (
    <>
      <Box display="flex" flexWrap="wrap">
        <Box>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={onStartCalculate}
            classes={{ label: classes.label }}
            disabled={status === RUNNING || profession === ''}
          >
            <ProgressIcon className={classNames(classes.icon)} />
            <Typography>
              <Trans>Calculate</Trans>
            </Typography>
          </Button>
        </Box>
        <Box>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={onCancelCalculate}
            disabled={status !== RUNNING}
          >
            <Cancel className={classNames(classes.icon)} />
            <Typography style={{ marginLeft: 8 }}>
              <Trans>Abort</Trans>
            </Typography>
          </Button>
        </Box>
        <Box flexGrow={1} alignSelf="center">
          <URLStateExport />
        </Box>
        <Box alignSelf="center">
          <FormControlLabel
            control={
              <Switch
                checked={compareByPercent}
                onChange={(e) => dispatch(changeCompareByPercent(e.target.checked))}
                name="checked"
                color="primary"
              />
            }
            label={t('% Comparison')}
            classes={{ label: classes.comparisonLabel }}
          />
        </Box>
        <Box alignSelf="center" display="flex" m={1} maxWidth={300}>
          <Typography variant="caption" className={classes.errorText}>
            {error}
          </Typography>
        </Box>
        <Box alignSelf="center">
          <Chip
            label={
              <>
                <Trans>Status:</Trans> {firstUppercase(status)} {icon}
              </>
            }
            color={[SUCCESS, WAITING, RUNNING].includes(status) ? 'primary' : 'secondary'}
          />
        </Box>
      </Box>
    </>
  );
};

export default ControlsBox;
