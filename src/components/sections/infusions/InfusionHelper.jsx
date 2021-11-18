import React from 'react';
import {
  Typography,
  Grid,
  Slider,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import { Trans } from 'gatsby-plugin-react-i18next';
import { Item, CommonEffect, Coin } from 'gw2-ui-bulk';
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
  getHelperResult,
} from '../../../state/slices/infusions';
import { INFUSIONS, infusionIds } from '../../../utils/gw2-data';

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

const InfusionHelper = () => {
  const dispatch = useDispatch();

  const ar = useSelector(getAR);
  const { maxInfusions, primaryInfusion, secondaryInfusion } = useSelector(getInfusions);

  const { enabled, impedence, attunement, singularity, tear, slots } = useSelector(getHelperData);

  const helperResult = useSelector(getHelperResult);

  const primaryAttribute = INFUSIONS.find((entry) => entry.id === primaryInfusion)?.attribute;
  const secondaryAttribute = INFUSIONS.find((entry) => entry.id === secondaryInfusion)?.attribute;

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

  const { error, resultText, resultArray, cost } = helperResult;

  return (
    <Accordion expanded={enabled} onChange={handleEnabledChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>
          <Trans>Infusion Helper (WIP)</Trans>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={4}>
          <Grid container item xs={12}>
            <Grid item xs={12}>
              <Typography>
                <Trans>Account AR</Trans>
              </Typography>
            </Grid>
            <Grid item xs={10}>
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
            <Grid item xs={10}>
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
            <Grid item xs={12} md={6}>
              <CheckboxComponent
                value={singularity}
                checked={singularity}
                label={
                  <Typography variant="body2">
                    <Trans>
                      +5 AR from <CommonEffect name="Rigorous Certainty" />
                    </Trans>
                  </Typography>
                }
                onChange={(e) => dispatch(changeSingularity(e.target.checked))}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CheckboxComponent
                value={tear}
                checked={tear}
                label={
                  <Typography variant="body2">
                    <Trans>
                      +15 AR from <Item id={70596} /> w/ mastery
                    </Trans>
                  </Typography>
                }
                onChange={(e) => dispatch(changeTear(e.target.checked))}
              />
            </Grid>
          </Grid>

          <Grid container item xs={12} md={11}>
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

          <Grid item xs={12} md={11}>
            {error ? (
              <Alert variant="outlined" severity="error">
                {error}
              </Alert>
            ) : (
              <>
                <Typography>
                  <Trans>Result: </Trans>
                  {resultText}
                </Typography>
                <Typography>
                  <Trans>
                    Estimated Cost: <Coin value={cost * 10000} />
                  </Trans>
                </Typography>
                <Typography variant="body2">
                  {resultArray.map((text) => {
                    const infusionData = infusionIds[text];

                    return (
                      <>
                        {infusionData?.[primaryAttribute]?.id ? (
                          <Item id={infusionData?.[primaryAttribute]?.id} disableLink disableText />
                        ) : null}
                        {infusionData?.[secondaryAttribute]?.id ? (
                          <Item
                            id={infusionData?.[secondaryAttribute]?.id}
                            disableLink
                            disableText
                          />
                        ) : null}
                        {infusionData?.id ? (
                          <Item
                            id={infusionData?.id}
                            disableLink
                            disableText
                            style={{ fontSize: 17 }}
                          />
                        ) : null}{' '}
                        {text}
                        <br />
                      </>
                    );
                  })}
                </Typography>
                <Typography variant="caption">
                  <Trans>Note: Not cost optimized for {'>'}1 weapon set.</Trans>
                </Typography>
              </>
            )}
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default React.memo(InfusionHelper);
