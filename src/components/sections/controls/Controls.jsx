/* eslint-disable no-console */
import { Box, Button, Chip, Typography } from '@material-ui/core';
import Cancel from '@material-ui/icons/Cancel';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import classNames from 'classnames';
import { Trans } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeControl, getControl, setModifiers } from '../../../state/controlsSlice';
import { ABORTED, RUNNING, SUCCESS, WAITING } from '../../../state/optimizer/status';
import { firstUppercase } from '../../../utils/usefulFunctions';
import ProgressIcon from '../../baseComponents/ProgressIcon';

const ControlsBox = ({ classes, profession }) => {
  const dispatch = useDispatch();

  const status = useSelector(getControl('status'));

  const onStartCalculate = React.useCallback(
    (e) => {
      console.log('calculate');

      // pass data from GraphQL
      dispatch(setModifiers({ profession }));

      dispatch(changeControl({ key: 'status', value: RUNNING }));
      dispatch({
        type: 'START',
      });
    },
    [dispatch, profession],
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
        <Chip
          label={
            <>
              <Trans>Status:</Trans> {firstUppercase(status)} {icon}
            </>
          }
          color={status !== ABORTED ? 'primary' : 'secondary'}
        />
      </Box>
    </Box>
  );
};

export default ControlsBox;
