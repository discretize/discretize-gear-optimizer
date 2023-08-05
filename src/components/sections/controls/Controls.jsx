import { firstUppercase } from '@discretize/react-discretize-components';
import Cancel from '@mui/icons-material/Cancel';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';
import ErrorIcon from '@mui/icons-material/Error';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { Box, Button, Chip, Typography } from '@mui/material';
import classNames from 'classnames';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import calculate from '../../../state/optimizer-parallel/calculate';
import { RESUME, STOP } from '../../../state/optimizer-parallel/worker/workerMessageTypes';
import { ERROR, RUNNING, STOPPED, SUCCESS, WAITING } from '../../../state/optimizer/status';
import SagaTypes from '../../../state/sagas/sagaTypes';
import {
  changeError,
  changeStatus,
  getError,
  getMulticore,
  getProfession,
  getStatus,
} from '../../../state/slices/controlsSlice';
import { getPriority } from '../../../state/slices/priorities';
import ProgressIcon from '../../baseComponents/ProgressIcon';
import ResultTableSettings from './ResultTableSettings';

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
  chipIcon: { marginBottom: '-6px !important' },
}));

const ControlsBox = () => {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const store = useStore();
  const [workers, setWorkers] = React.useState(null);

  const status = useSelector(getStatus);
  const error = useSelector(getError);
  const affixes = useSelector(getPriority('affixes'));
  const weaponType = useSelector(getPriority('weaponType'));
  const profession = useSelector(getProfession);
  const multicore = useSelector(getMulticore);

  const onStartCalculate = (e) => {
    if (affixes.length < 1) {
      dispatch(changeError(t('Select at least one affix in the priorities section!')));
      dispatch(changeStatus(ERROR));
      return;
    }
    if (weaponType === 'unset') {
      dispatch(changeError(t('Select a weapon type in the priorities section!')));
      dispatch(changeStatus(ERROR));
      return;
    }

    console.log('calculate');

    if (!multicore) {
      dispatch(changeError(''));
      dispatch({ type: SagaTypes.Start });
    } else {
      const workersNew = calculate(store.getState(), dispatch);
      setWorkers(workersNew);
    }
  };

  const onResumeCalculate = (e) => {
    if (!multicore) {
      dispatch({ type: SagaTypes.Resume });
    } else {
      workers.forEach(({ worker }) => worker.postMessage({ type: RESUME }));
    }
  };

  const onStopCalculate = (e) => {
    if (!multicore) {
      dispatch({ type: SagaTypes.Stop });
    } else {
      workers.forEach(({ worker }) => worker.postMessage({ type: STOP }));
    }
  };

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
          {status === RUNNING ? (
            <ProgressIcon className={classes.icon} />
          ) : (
            <EqualizerRoundedIcon className={classes.icon} />
          )}
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
          onClick={onStopCalculate}
          disabled={status !== RUNNING}
        >
          <Cancel className={classNames(classes.icon)} />
          <Typography style={{ marginLeft: 8 }}>
            <Trans>Stop</Trans>
          </Typography>
        </Button>
      </Box>
      <Box flexGrow={1}>
        {status === STOPPED ? (
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={onResumeCalculate}
          >
            <ProgressIcon className={classes.icon} />
            <Typography style={{ marginLeft: 8 }}>
              <Trans>Resume</Trans>
            </Typography>
          </Button>
        ) : null}
      </Box>

      <Box alignSelf="center" display="flex" m={1} maxWidth={300}>
        <Typography variant="caption" className={classes.errorText}>
          {error}
        </Typography>
      </Box>
      <Box alignSelf="center">
        <Chip
          sx={{ marginRight: 1 }}
          label={
            <>
              <Trans>Status:</Trans> {firstUppercase(status)} {icon}
            </>
          }
          color={[SUCCESS, WAITING, RUNNING].includes(status) ? 'primary' : 'secondary'}
        />
        <ResultTableSettings />
      </Box>
    </Box>
  );
};

export default ControlsBox;
