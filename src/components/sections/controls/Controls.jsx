import {
  Box,
  Button,
  Chip,
  makeStyles,
  Typography,
  FormControlLabel,
  Switch,
} from '@material-ui/core';
import Cancel from '@material-ui/icons/Cancel';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import ErrorIcon from '@material-ui/icons/Error';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import classNames from 'classnames';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeControl,
  changeError,
  getControl,
  getError,
  getCompareByPercent,
  changeCompareByPercent,
} from '../../../state/slices/controlsSlice';
import { ABORTED, ERROR, RUNNING, SUCCESS, WAITING } from '../../../state/optimizer/status';
import { getPriority } from '../../../state/slices/priorities';
import { firstUppercase } from '../../../utils/usefulFunctions';
import ProgressIcon from '../../baseComponents/ProgressIcon';

const useStyles = makeStyles((theme) => ({
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
}));

const ControlsBox = ({ profession }) => {
  const classes = useStyles();
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
            <ProgressIcon />
            <Typography>
              <Trans>Calculate</Trans>
            </Typography>
          </Button>
        </Box>
        <Box flexGrow={1}>
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
        <Box alignSelf="center">
          <Typography variant="caption">
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
            />
          </Typography>
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
