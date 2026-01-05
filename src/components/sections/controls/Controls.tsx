import { firstUppercase } from '@discretize/react-discretize-components';
import Cancel from '@mui/icons-material/Cancel';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';
import ErrorIcon from '@mui/icons-material/Error';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { Box, Button, Chip, Typography } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { resumeCalc, startCalc, stopCalc } from '../../../state/async/calculationThunks';
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
} from '../../../state/optimizer/utils/status';
import { useAppDispatch } from '../../../state/redux-hooks';
import {
  changeError,
  changeStatus,
  getError,
  getProfession,
  getRustMode,
  getStatus,
} from '../../../state/slices/controlsSlice';
import { getAffixes } from '../../../state/slices/priorities';
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
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const status = useSelector(getStatus);
  const error = useSelector(getError);
  const affixes = useSelector(getAffixes);
  const profession = useSelector(getProfession);
  const rustMode = useSelector(getRustMode);

  const onStartCalculate = () => {
    if (affixes.length < 1) {
      dispatch(changeError(t('Select at least one affix in the priorities section!')));
      dispatch(changeStatus(ERROR));
      return;
    }

    console.log('Starting Calculation');

    if (!rustMode) {
      dispatch(changeError(''));
      dispatch(startCalc);
    } else {
      dispatch(calculateParallel);
    }
  };

  const onResumeCalculate = () => {
    if (!rustMode) {
      dispatch(resumeCalc);
    } else {
      // not currently implemented: pause/resume in multicore rust mode
      // workers.forEach(({ worker }) => worker.postMessage({ type: RESUME }));
    }
  };

  const onStopCalculate = () => {
    if (!rustMode) {
      dispatch(stopCalc);
    } else {
      // workers.forEach(({ worker }) => worker.postMessage({ type: STOP }));
      dispatch(stopCalculationParallel);
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
        {status === STOPPED && !rustMode ? (
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
