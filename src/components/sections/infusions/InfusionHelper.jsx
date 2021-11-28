import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  makeStyles,
  Slider,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Alert from '@material-ui/lab/Alert';
import { Trans } from 'gatsby-plugin-react-i18next';
import { Coin as CoinRaw, CommonEffect as CommonEffectRaw, Item as ItemRaw } from 'gw2-ui-bulk';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeAR,
  changeAttunement,
  changeFreeWvW,
  changeHelperEnabled,
  changeImpedence,
  changeOwnedMatrix,
  changeMaxInfusions,
  changeSingularity,
  changeSlots,
  changeTear,
  getAR,
  getHelperData,
  getHelperResult,
  getMaxInfusions,
  getPrimaryInfusion,
  getSecondaryInfusion,
} from '../../../state/slices/infusions';
import { infusionIds } from '../../../utils/gw2-data';
import CheckboxComponent from '../../baseComponents/CheckboxComponent';
import TextDivider from '../../baseComponents/TextDivider';

const Item = React.memo(ItemRaw);
const CommonEffect = React.memo(CommonEffectRaw);
const Coin = React.memo(CoinRaw);

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

const targetARMarks = [
  {
    value: 150,
    label: '150',
  },
  {
    value: 222,
    label: '222',
  },
  {
    value: 343,
    label: '343',
  },
];

const useStyles = makeStyles((theme) => ({
  bigStyle: { fontSize: 17 },
  bigMargin: { marginBottom: 16 },
  sliderMargin: { marginBottom: 28 },
  sliderMark: {
    transform: 'translateX(-100%)',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

// todo: import this from somewhere
const parseTextNumber = (text, defaultValue) => {
  const parsed = parseInt(text, 10);
  if (Number.isNaN(parsed)) {
    return defaultValue;
  }
  return Math.max(parsed, 0);
};

const InfusionHelper = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const arString = useSelector(getAR);
  const ar = parseTextNumber(arString, 0);
  const maxInfusionsString = useSelector(getMaxInfusions);
  const maxInfusions = parseTextNumber(maxInfusionsString, 18);
  const primaryInfusion = useSelector(getPrimaryInfusion);
  const secondaryInfusion = useSelector(getSecondaryInfusion);
  const { enabled, impedence, attunement, singularity, tear, slots, freeWvW, ownedMatrix } =
    useSelector(getHelperData);
  const { error, resultText, resultArray, cost, maxRequiredMatrix } = useSelector(getHelperResult);

  const handleEnabledChange = React.useCallback(
    (_e, value) => dispatch(changeHelperEnabled(value)),
    [dispatch],
  );
  const handleARChange = React.useCallback(
    (_e, value) => dispatch(changeAR(String(value))),
    [dispatch],
  );
  const handleMaxInfusionsChange = React.useCallback(
    (_e, value) => dispatch(changeMaxInfusions(String(value))),
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
  const handleOwnedMatrixChange = React.useCallback(
    (_e, value) => dispatch(changeOwnedMatrix(value)),
    [dispatch],
  );

  return (
    <Accordion
      expanded={enabled}
      onChange={handleEnabledChange}
      TransitionProps={{ unmountOnExit: true }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>
          <Trans>Infusion Helper (WIP)</Trans>
        </Typography>
      </AccordionSummary>
      <AccordionDetails style={{ flexDirection: 'column', padding: 32 }}>
        <Typography>
          <Trans>Account AR</Trans>
        </Typography>

        <Slider
          value={impedence}
          step={null}
          min={0}
          max={20}
          marks={impedenceMarks}
          valueLabelDisplay="auto"
          onChange={handleImpedenceChange}
          classes={{ markLabel: classes.sliderMark }}
          className={classes.sliderMargin}
        />
        <Slider
          value={attunement}
          step={null}
          min={0}
          max={25}
          marks={attunementMarks}
          valueLabelDisplay="auto"
          onChange={handleAttunementChange}
          classes={{ markLabel: classes.sliderMark }}
          className={classes.sliderMargin}
        />

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
          className={classes.bigMargin}
        />

        <Typography id="target-ar">
          <Trans>Target AR</Trans>
        </Typography>
        <Slider
          value={ar}
          step={1}
          min={0}
          max={409}
          marks={targetARMarks}
          valueLabelDisplay="on"
          onChange={handleARChange}
          aria-labelledby="target-ar"
        />

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
          className={classes.bigMargin}
        />

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

        <CheckboxComponent
          value={freeWvW}
          checked={freeWvW}
          label={
            <Typography variant="body2">
              <Trans>Enable free WvW stat infusions</Trans>
            </Typography>
          }
          onChange={(e) => dispatch(changeFreeWvW(e.target.checked))}
          className={classes.bigMargin}
        />

        {maxRequiredMatrix ? (
          <>
            <Typography id="owned-matrix">
              <Trans>
                Use Owned <Item id={79230} />:
              </Trans>
            </Typography>
            <Slider
              value={ownedMatrix}
              step={5}
              min={0}
              max={360}
              marks={[
                {
                  value: maxRequiredMatrix,
                  label: String(maxRequiredMatrix),
                },
              ]}
              valueLabelDisplay="auto"
              onChange={handleOwnedMatrixChange}
              className={classes.bigMargin}
              aria-labelledby="owned-matrix"
            />
          </>
        ) : null}

        {error ? (
          <Alert variant="outlined" severity="error">
            {error}
          </Alert>
        ) : (
          <>
            <TextDivider text="Result" />
            <Typography style={{ marginBottom: 16 }}>
              <Trans>
                Estimated Cost: <Coin value={cost * 10000} />
              </Trans>
            </Typography>

            <Typography>
              <Trans>Infusions: </Trans>
              {resultText}
            </Typography>

            <Typography variant="body2">
              {resultArray.map((text, i) => {
                const infusionData = infusionIds[text];
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <React.Fragment key={i}>
                    {infusionData?.[primaryInfusion]?.id ? (
                      <Item id={infusionData?.[primaryInfusion]?.id} disableLink disableText />
                    ) : null}
                    {infusionData?.[secondaryInfusion]?.id ? (
                      <Item id={infusionData?.[secondaryInfusion]?.id} disableLink disableText />
                    ) : null}
                    {infusionData?.id ? (
                      <Item
                        id={infusionData?.id}
                        disableLink
                        disableText
                        className={classes.bigStyle}
                      />
                    ) : null}{' '}
                    {text}
                    <br />
                  </React.Fragment>
                );
              })}
            </Typography>
            <Typography variant="caption">
              <Trans>Note: Not cost optimized for {'>'}1 weapon set.</Trans>
            </Typography>
          </>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default React.memo(InfusionHelper);
