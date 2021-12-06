/* eslint-disable no-unused-vars */
import React from 'react';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, makeStyles, Grid, Slider } from '@material-ui/core';
import { CommonEffect as CommonEffectRaw, Condition as ConditionRaw } from 'gw2-ui-bulk';
import AmountInput from '../../baseComponents/AmountInput';
import {
  // getExposedUptime,
  getAttackRate,
  getMovementUptime,
  // changeExposedUptime,
  changeAttackRate,
  changeMovementUptime,
} from '../../../state/slices/boss';
import { parseBoss } from '../../../utils/usefulFunctions';

const CommonEffect = React.memo(CommonEffectRaw);
const Condition = React.memo(ConditionRaw);

const Boss = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  // const exposedUptimeString = useSelector(getExposedUptime);
  const attackRateString = useSelector(getAttackRate);
  const movementUptimeString = useSelector(getMovementUptime);

  // const exposedUptime = parseBoss(exposedUptimeString).value;
  const attackRate = parseBoss(attackRateString).value;
  const movementUptime = parseBoss(movementUptimeString).value;

  return (
    <>
      {/* <Typography>
        <Trans>
          <CommonEffect name="Exposed" disableText /> exposed uptime
        </Trans>
      </Typography>
      <AmountInput
        label="%"
        handleAmountChange={(e) => dispatch(changeExposedUptime(e.target.value))}
        value={exposedUptimeString}
      />
      <Slider
        value={exposedUptime}
        step={1}
        min={0}
        max={100}
        // marks={}
        onChange={(_e, value) => dispatch(changeExposedUptime(String(value)))}
        valueLabelDisplay="auto"
        valueLabelFormat={(text) => `${text}%`}
        style={{ maxWidth: 250 }}
      />
      <Typography variant="body2">
        <Trans>note: assumes similar damage distribution with/without exposed</Trans>
      </Typography> */}
      <Typography>
        <Trans>
          <Condition name="Torment" disableText /> Movement Uptime
        </Trans>
      </Typography>

      <AmountInput
        label="%"
        handleAmountChange={(e) => dispatch(changeMovementUptime(e.target.value))}
        value={movementUptimeString}
      />
      <Slider
        value={movementUptime}
        step={1}
        min={0}
        max={100}
        // marks={}
        onChange={(_e, value) => dispatch(changeMovementUptime(String(value)))}
        valueLabelDisplay="auto"
        valueLabelFormat={(text) => `${text}%`}
        style={{ marginLeft: 16, maxWidth: 300 }}
      />

      <Typography>
        <Trans>
          <Condition name="Confusion" disableText /> Attack Rate
        </Trans>
      </Typography>
      <AmountInput
        label={t('/s')}
        handleAmountChange={(e) => dispatch(changeAttackRate(e.target.value))}
        value={attackRateString}
        maxWidth={36}
      />
      <Slider
        value={attackRate}
        step={0.01}
        min={0}
        max={1}
        // marks={}
        onChange={(_e, value) => dispatch(changeAttackRate(String(value)))}
        valueLabelDisplay="auto"
        style={{ marginLeft: 16, maxWidth: 300 }}
      />
    </>
  );
};

export default Boss;
