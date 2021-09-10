/* eslint-disable no-console */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Chip, Typography } from '@material-ui/core';
import Cancel from '@material-ui/icons/Cancel';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import classNames from 'classnames';
import ProgressIcon from '../../baseComponents/ProgressIcon';
import { changeControl, getControl, setModifiers } from '../../../state/gearOptimizerSlice';
import { ABORTED, RUNNING, SUCCESS, WAITING } from '../../../state/optimizer/status';
import { firstUppercase } from '../../../utils/usefulFunctions';

const ControlsBox = ({ classes, profession, data }) => {
  const dispatch = useDispatch();

  const status = useSelector(getControl('status'));

  const onStartCalculate = React.useCallback(
    (e) => {
      console.log('calculate');

      // pass data from GraphQL
      dispatch(setModifiers(data));

      dispatch(changeControl({ key: 'status', value: RUNNING }));
      dispatch({
        type: 'START',
      });
    },
    [data, dispatch],
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
          <ProgressIcon />
          <Typography>Calculate</Typography>
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
          <Cancel className={classNames(classes.icon)}></Cancel>
          <Typography style={{ marginLeft: 8 }}>Abort</Typography>
        </Button>
      </Box>
      <Box alignSelf="center">
        <Chip
          label={
            <>
              Status: {firstUppercase(status)}{' '}
              {status === SUCCESS ? (
                <DoneAllIcon fontSize="small" classes={{ root: classes.chipIcon }} />
              ) : status === WAITING || status === RUNNING ? (
                <HourglassEmptyIcon fontSize="small" classes={{ root: classes.chipIcon }} />
              ) : null}
            </>
          }
          color={status !== ABORTED ? 'primary' : 'secondary'}
        />
      </Box>
    </Box>
  );
};

export default ControlsBox;
