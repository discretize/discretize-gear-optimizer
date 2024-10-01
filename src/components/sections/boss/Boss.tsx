import { Condition as ConditionRaw } from '@discretize/gw2-ui-new';
import { Box, Slider } from '@mui/material';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeAttackRate,
  changeMovementUptime,
  getAttackRate,
  getMovementUptime,
} from '../../../state/slices/boss';
import { parseBoss } from '../../../utils/usefulFunctions';
import { AmountInputAuto } from '../../baseComponents/AmountInput';

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

const Boss = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const attackRateString = useSelector(getAttackRate);
  const movementUptimeString = useSelector(getMovementUptime);

  const attackRate = parseBoss(attackRateString).value;
  const movementUptime = parseBoss(movementUptimeString).value;

  return (
    <>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <Box sx={{ width: 195 }}>
          <AmountInputAuto
            label={
              <Trans>
                <Condition name="Torment" disableText /> Movement Uptime
              </Trans>
            }
            endLabel="%"
            handleAmountChange={(_e, value) => dispatch(changeMovementUptime(value))}
            value={movementUptimeString}
            maxWidth={180}
            autoCompleteProps={{ options: [] }}
          />
        </Box>
        <Box
          sx={{
            mx: 3,
            mb: 4,
            flexGrow: 1,
            alignSelf: 'center',
            minWidth: 200,
            md: { marginLeft: 2 },
          }}
        >
          <Slider
            value={movementUptime}
            step={1}
            marks={[...Array(11).keys()].map((num) => ({ value: num * 10, label: num * 10 }))}
            min={0}
            max={100}
            onChange={(_e, value) => dispatch(changeMovementUptime(String(value)))}
            valueLabelDisplay="auto"
            valueLabelFormat={(text) => `${text}%`}
          />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <Box sx={{ width: 195 }}>
          <AmountInputAuto
            label={
              <Trans>
                <Condition name="Confusion" disableText /> Attack Rate
              </Trans>
            }
            endLabel={t('/s')}
            handleAmountChange={(_e, value) => dispatch(changeAttackRate(value))}
            value={attackRateString}
            maxWidth={180}
            autoCompleteProps={{
              options: confusionOptions,
              renderOption: (props, option) => (
                <li {...props}>{`${option}: ${confusionOptionLabels[option]}`}</li>
              ),
            }}
          />
        </Box>
        <Box
          sx={{
            mx: 3,
            mb: 4,
            flexGrow: 1,
            alignSelf: 'center',
            minWidth: 200,
            md: { marginLeft: 2 },
          }}
        >
          <Slider
            value={attackRate}
            step={0.01}
            min={0}
            max={0.83}
            marks={confusionMarks}
            onChange={(_e, value) => dispatch(changeAttackRate(String(value)))}
            valueLabelDisplay="auto"
          />
        </Box>
      </Box>
    </>
  );
};

export default Boss;
