import React from 'react';
import {
  Typography,
  Grid,
  Slider,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import { Trans } from 'gatsby-plugin-react-i18next';
import { Item, CommonEffect } from 'gw2-ui-bulk';

import CheckboxComponent from '../../baseComponents/CheckboxComponent';

import {
  changeAR,
  getAR,
  getInfusions,
  changeMaxInfusions,
  changeHelperEnabled,
  changeSlots,
  changeImpedence,
  changeAttunement,
  changeSingularity,
  changeTear,
  getHelperData,
} from '../../../state/slices/infusions';

const impedenceMarks = [
  {
    value: 0,
    label: '',
  },
  {
    value: 5,
    label: 'Impedence 1',
  },
  {
    value: 10,
    label: 'Impedence 2',
  },
  {
    value: 15,
    label: 'Impedence 3',
  },
  {
    value: 20,
    label: 'Impedence 4',
  },
];

const attunementMarks = [
  {
    value: 0,
    label: '',
  },
  {
    value: 5,
    label: 'Savant',
  },
  {
    value: 10,
    label: 'Prodigy',
  },
  {
    value: 15,
    label: 'Champion',
  },
  {
    value: 25,
    label: 'God',
  },
];

const calcAgonyInfusions = (slots, ar) => {
  if (slots === 0) return { agonyCost: 0, agonyText: '', agonyArray: [] };
  if (ar < 1) return { agonyCost: 0, agonyText: '', agonyArray: [] };

  const lowerType = Math.floor(ar / slots);
  const higherType = lowerType + 1;
  const higherCount = ar % slots;
  const lowerCount = slots - higherCount;

  // AR infusion cost is about 1g for +7; doubles with each additional
  const agonyCost = lowerCount * 2 ** (lowerType - 7) + higherCount * 2 ** (higherType - 7);

  const agonyArray = [];
  agonyArray.push(Array(lowerCount).fill(`+${lowerType}`));
  agonyArray.push(Array(higherCount).fill(`+${higherType}`));

  const agonyText = [];
  if (lowerCount) agonyText.push(`${lowerCount}x +${lowerType}`);
  if (higherCount) agonyText.push(`${higherCount}x +${higherType}`);

  return { agonyCost, agonyText /* agonyArray */ };
};

const InfusionHelper = () => {
  const dispatch = useDispatch();

  const ar = useSelector(getAR);
  const {
    maxInfusions,
    primaryInfusion,
    secondaryInfusion,
    primaryMaxInfusions,
    secondaryMaxInfusions,
  } = useSelector(getInfusions);

  const { enabled, impedence, attunement, singularity, tear, slots } = useSelector(getHelperData);

  const handleEnabledChange = React.useCallback(
    (_e, value) => dispatch(changeHelperEnabled(value)),
    [dispatch],
  );
  const handleARChange = React.useCallback((_e, value) => dispatch(changeAR(value)), [dispatch]);
  const handleMaxInfusionsChange = React.useCallback(
    (_e, value) => dispatch(changeMaxInfusions(value)),
    [dispatch],
  );
  const handleImpedenceChange = React.useCallback(
    (_e, value) => dispatch(changeImpedence(value)),
    [dispatch],
  );
  const handleAttunementChange = React.useCallback(
    (_e, value) => dispatch(changeAttunement(value)),
    [dispatch],
  );
  const handleSlotsChange = React.useCallback(
    (_e, value) => dispatch(changeSlots(value)),
    [dispatch],
  );

  const helperResult = React.useMemo(() => {
    let resultText = '';
    const ARFromGear = ar - impedence - attunement - (singularity ? 5 : 0) - (tear ? 15 : 0);

    if (ARFromGear <= 0) {
      resultText += '\nNo infusions needed!';
      return resultText;
    }

    const statSlots = Math.min(
      (primaryInfusion ? primaryMaxInfusions || 18 : 0) +
        (secondaryInfusion ? secondaryMaxInfusions || 18 : 0),
      maxInfusions,
    );

    const agonySlots = slots - statSlots;

    resultText += `ARFromGear:${ARFromGear}, statSlots: ${statSlots}, slots: ${slots}, agonySlots: ${agonySlots}
`;

    if (agonySlots < 0) {
      resultText += 'Error: more stat infusions selected than slots!';
      return resultText;
    }

    if (ARFromGear > 30 * agonySlots + 9 * statSlots) {
      resultText += 'Error: target AR is too high!';
      return resultText;
    }

    const resultArray = [];

    let nine = statSlots;
    let seven = 0;
    let five = 0;
    let zero = 0;

    const createResult = () => {
      const statsAR = five * 5 + seven * 7 + nine * 9;
      if (!agonySlots && statsAR < ARFromGear) return null;

      const statsCost = five * 15 + seven * 32 + nine * 70;

      const agony = calcAgonyInfusions(agonySlots, ARFromGear - statsAR);
      const { agonyCost } = agony;
      const cost = statsCost + agonyCost;

      return { cost, zero, five, seven, nine, agony };
    };

    let bestResult = createResult();
    console.log('initial result:', bestResult);

    const test = () => {
      const testResult = createResult();
      if (!testResult) return;
      if (!bestResult || testResult.cost <= bestResult.cost) {
        bestResult = testResult;
      }
    };

    while (nine > 0) {
      nine--;
      seven++;
      test();
    }

    while (seven > 0) {
      seven--;
      five++;
      test();
    }

    while (five > 0) {
      five--;
      zero++;
      test();
    }
    console.log('optimized result:', bestResult);

    if (!bestResult) {
      resultText += 'Error: target AR is too high!';
      return resultText;
    }

    const statText = [];

    if (bestResult.zero) statText.push(`${bestResult.zero}x WvW stat`);
    if (bestResult.five) statText.push(`${bestResult.five}x +5 stat`);
    if (bestResult.seven) statText.push(`${bestResult.seven}x +7 stat`);
    if (bestResult.nine) statText.push(`${bestResult.nine}x +9 stat`);

    resultText += `\n${[...statText, ...bestResult.agony.agonyText].join(', ')}`;

    resultText += `\nCost: ${bestResult.cost}`;

    return resultText;
  }, [
    ar,
    attunement,
    impedence,
    maxInfusions,
    primaryInfusion,
    primaryMaxInfusions,
    secondaryInfusion,
    secondaryMaxInfusions,
    singularity,
    slots,
    tear,
  ]);

  return (
    <Accordion expanded={enabled} onChange={handleEnabledChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>
          <Trans>Infusion Helper (WIP)</Trans>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={6}>
          <Grid container item xs={12} sm={11}>
            <Grid item xs={12}>
              <Typography id="target-ar">
                <Trans>Target AR</Trans>
              </Typography>
              <Slider
                value={ar}
                step={1}
                min={0}
                max={409}
                valueLabelDisplay="on"
                onChange={handleARChange}
                aria-labelledby="target-ar"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography id="stat-infusion-slots">
                <Trans>Stat Infusion Slots</Trans>
              </Typography>
              <Slider
                value={maxInfusions}
                step={1}
                min={0}
                max={18}
                marks
                valueLabelDisplay="auto"
                onChange={handleMaxInfusionsChange}
                aria-labelledby="total-infusion-slots"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography id="total-infusion-slots">
                <Trans>Total Infusion Slots</Trans>
              </Typography>
              <Slider
                value={slots}
                step={1}
                min={0}
                max={18}
                marks
                valueLabelDisplay="auto"
                onChange={handleSlotsChange}
                aria-labelledby="total-infusion-slots"
              />
            </Grid>
          </Grid>

          <Grid container item xs={12} sm={9}>
            <Typography>
              <Trans>Account AR</Trans>
            </Typography>
            <Grid item xs={12}>
              <Slider
                value={impedence}
                step={null}
                min={0}
                max={20}
                marks={impedenceMarks}
                valueLabelDisplay="auto"
                onChange={handleImpedenceChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Slider
                value={attunement}
                step={null}
                min={0}
                max={25}
                marks={attunementMarks}
                valueLabelDisplay="auto"
                onChange={handleAttunementChange}
              />
            </Grid>
            <Grid item xs={12}>
              <CheckboxComponent
                value={singularity}
                checked={singularity}
                label={
                  <>
                    <Trans>Include 5 AR from </Trans>
                    <CommonEffect name="Rigorous Certainty" />
                  </>
                }
                onChange={(e) => dispatch(changeSingularity(e.target.checked))}
              />
            </Grid>
            <Grid item xs={12}>
              <CheckboxComponent
                value={tear}
                checked={tear}
                label={
                  <>
                    <Trans>
                      Include 15 AR from <Item id={70596} /> w/ mastery
                    </Trans>
                  </>
                }
                onChange={(e) => dispatch(changeTear(e.target.checked))}
              />
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography>
              <Trans>Result</Trans>
            </Typography>
            <Typography variant="caption">
              <Trans>Note: Not cost optimized for weapon sets.</Trans>
            </Typography>
            <pre>{helperResult}</pre>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default InfusionHelper;
