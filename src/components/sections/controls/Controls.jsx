import { firstUppercase } from '@discretize/react-discretize-components';
import Cancel from '@mui/icons-material/Cancel';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';
import ErrorIcon from '@mui/icons-material/Error';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { Box, Button, Chip, Typography } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import {
  calculateParallel,
  stopCalculationParallel,
} from '../../../state/optimizer-parallel/calculate';
import {
  ERROR,
  RUNNING,
  RUNNING_HEURISTICS,
  STOPPED,
  SUCCESS,
  WAITING,
} from '../../../state/optimizer/status';
import SagaTypes from '../../../state/sagas/sagaTypes';
import {
  changeError,
  changeStatus,
  getError,
  getMulticore,
  getProfession,
  getStatus,
} from '../../../state/slices/controlsSlice';
import { getAffixes, getWeaponType } from '../../../state/slices/priorities';
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
  const { classes, cx } = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const store = useStore();

  const status = useSelector(getStatus);
  const error = useSelector(getError);
  const affixes = useSelector(getAffixes);
  const weaponType = useSelector(getWeaponType);
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

    console.log('Starting Calculation');

    if (!multicore) {
      dispatch(changeError(''));
      dispatch({ type: SagaTypes.Start });
    } else {
      calculateParallel(store.getState(), dispatch);
    }
  };

  const onResumeCalculate = (e) => {
    if (!multicore) {
      dispatch({ type: SagaTypes.Resume });
    } else {
      // not currently implemented: pause/resume in multicore rust mode
      // workers.forEach(({ worker }) => worker.postMessage({ type: RESUME }));
    }
  };

  const onStopCalculate = (e) => {
    if (!multicore) {
      dispatch({ type: SagaTypes.Stop });
    } else {
      // workers.forEach(({ worker }) => worker.postMessage({ type: STOP }));
      stopCalculationParallel(dispatch);
    }
  };

  let icon;

  switch (status) {
    case SUCCESS:
      icon = <DoneAllIcon fontSize="small" classes={{ root: classes.chipIcon }} />;
      break;
    case WAITING:
    case RUNNING:
    case RUNNING_HEURISTICS:
      icon = <HourglassEmptyIcon fontSize="small" classes={{ root: classes.chipIcon }} />;
      break;
    case ERROR:
      icon = <ErrorIcon fontSize="small" classes={{ root: classes.chipIcon }} />;
      break;
    default:
      icon = null;
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Box>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={onStartCalculate}
          classes={{ label: classes.label }}
          disabled={[RUNNING, RUNNING_HEURISTICS].includes(status) || profession === ''}
        >
          {[RUNNING, RUNNING_HEURISTICS].includes(status) ? (
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
          disabled={![RUNNING, RUNNING_HEURISTICS].includes(status)}
        >
          <Cancel className={cx(classes.icon)} />
          <Typography style={{ marginLeft: 8 }}>
            <Trans>Stop</Trans>
          </Typography>
        </Button>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        {status === STOPPED && !multicore ? (
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

      <Box sx={{ alignSelf: 'center', display: 'flex', m: 1, maxWidth: 300 }}>
        <Typography variant="caption" className={classes.errorText}>
          {error}
        </Typography>
      </Box>
      <Box sx={{ alignSelf: 'center' }}>
        <Chip
          sx={{ marginRight: 1 }}
          label={
            <>
              <Trans>Status:</Trans> {firstUppercase(status)} {icon}
            </>
          }
          color={
            [SUCCESS, WAITING, RUNNING, RUNNING_HEURISTICS].includes(status)
              ? 'primary'
              : 'secondary'
          }
        />
        <ResultTableSettings />
      </Box>
    </Box>
  );
};

export default ControlsBox;
