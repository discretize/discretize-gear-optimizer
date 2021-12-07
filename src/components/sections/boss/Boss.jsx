import React from 'react';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, makeStyles, Slider } from '@material-ui/core';
import { Condition as ConditionRaw } from 'gw2-ui-bulk';
import AmountInput from '../../baseComponents/AmountInput';
import {
  getAttackRate,
  getMovementUptime,
  changeAttackRate,
  changeMovementUptime,
} from '../../../state/slices/boss';
import { parseBoss } from '../../../utils/usefulFunctions';

const Condition = React.memo(ConditionRaw);

const confusionOptionLabels = {
  '0.000': 'Golem',
  '0.133': 'Adina',
  '0.184': 'Deimos',
  '0.207': 'KC',
  '0.249': 'Dhuum',
  '0.295': 'Samarog',
  '0.312': 'Qadim',
  '0.318': 'Matthias',
  '0.322': 'Xera',
  '0.326': 'Sabetha',
  '0.342': 'Sloth',
  '0.361': 'Qadim 2',
  '0.369': 'Gorseval',
  '0.392': 'MO',
  '0.457': 'Sabir',
  '0.481': 'VG',
  '0.565': 'Cairn',
  '0.714': 'SH',
  '0.769': 'Nikare',
  '0.826': 'Kenut',
};
const confusionOptions = Object.keys(confusionOptionLabels);
const confusionMarks = [
  {
    value: 0,
    label: 'Golem',
  },
  {
    value: 0.318,
    label: 'Matthias',
  },
  {
    value: 0.4,
    label: '',
  },
  {
    value: 0.565,
    label: 'Cairn',
  },
  {
    value: 0.714,
    label: 'SH',
  },
  {
    value: 0.8,
    label: 'Largos',
  },
];

const useStyles = makeStyles((theme) => ({
  slider: { marginLeft: 16, marginRight: 16, marginBottom: 18 },
}));

const Boss = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const classes = useStyles();

  // const exposedUptimeString = useSelector(getExposedUptime);
  const attackRateString = useSelector(getAttackRate);
  const movementUptimeString = useSelector(getMovementUptime);

  // const exposedUptime = parseBoss(exposedUptimeString).value;
  const attackRate = parseBoss(attackRateString).value;
  const movementUptime = parseBoss(movementUptimeString).value;

  return (
    <>
      <Typography>
        <Trans>
          <Condition name="Torment" disableText /> Movement Uptime
        </Trans>
      </Typography>

      <AmountInput
        endLabel="%"
        handleAmountChange={(_e, value) => dispatch(changeMovementUptime(value))}
        value={movementUptimeString}
        maxWidth={180}
        useAutoComplete
        autoCompleteProps={{ options: [] }}
      />
      <Slider
        value={movementUptime}
        step={1}
        min={0}
        max={100}
        onChange={(_e, value) => dispatch(changeMovementUptime(String(value)))}
        valueLabelDisplay="auto"
        valueLabelFormat={(text) => `${text}%`}
        className={classes.slider}
      />

      <Typography>
        <Trans>
          <Condition name="Confusion" disableText /> Attack Rate
        </Trans>
      </Typography>
      <AmountInput
        endLabel={t('/s')}
        handleAmountChange={(_e, value) => dispatch(changeAttackRate(value))}
        value={attackRateString}
        maxWidth={180}
        useAutoComplete
        autoCompleteProps={{
          options: confusionOptions,
          renderOption: (option) => `${option}: ${confusionOptionLabels[option]}`,
        }}
      />
      <Slider
        value={attackRate}
        step={0.01}
        min={0}
        max={0.83}
        marks={confusionMarks}
        onChange={(_e, value) => dispatch(changeAttackRate(String(value)))}
        valueLabelDisplay="auto"
        className={classes.slider}
      />
    </>
  );
};

export default Boss;
