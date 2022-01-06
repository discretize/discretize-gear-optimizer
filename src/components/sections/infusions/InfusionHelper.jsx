import { Accordion, AccordionDetails, AccordionSummary, Slider, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Alert from '@mui/material/Alert';
import { Trans } from 'gatsby-plugin-react-i18next';
import { Coin as CoinRaw, CommonEffect as CommonEffectRaw, Item as ItemRaw } from 'gw2-ui-bulk';
import React from 'react';
import { TextDivider } from 'react-discretize-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeAR,
  changeAttunement,
  changeFreeWvW,
  changeHelperEnabled,
  changeImpedence,
  changeMaxInfusions,
  changeOwnedMatrix,
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
import { parseAr, parseInfusionCount } from '../../../utils/usefulFunctions';
import CheckboxComponent from '../../baseComponents/CheckboxComponent';

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
    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
  },
}));

const InfusionHelper = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const ar = parseAr(useSelector(getAR)).value;
  const maxInfusions = parseInfusionCount(useSelector(getMaxInfusions)).value;
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

                const firstStatId = infusionData?.[primaryInfusion]?.id;
                const secondStatId = infusionData?.[secondaryInfusion]?.id;

                let renderInfusions;

                if (firstStatId && secondStatId) {
                  renderInfusions = (
                    <>
                      <Item id={firstStatId} disableLink disableText />
                      <Item id={secondStatId} disableLink disableText />{' '}
                      <Item id={secondStatId} disableLink disableIcon disableTooltip text={text} />
                    </>
                  );
                } else if (firstStatId || secondStatId || infusionData?.id) {
                  renderInfusions = (
                    <Item
                      id={firstStatId || secondStatId || infusionData?.id}
                      disableLink
                      text={text}
                      className={classes.bigStyle}
                    />
                  );
                } else if (text.includes('Agony Infusion')) {
                  // fake higher infusions with a +24 with no tooltip
                  renderInfusions = (
                    <Item
                      id={49447}
                      disableLink
                      disableTooltip
                      text={text}
                      className={classes.bigStyle}
                    />
                  );
                } else {
                  renderInfusions = text;
                }

                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <React.Fragment key={i}>
                    {renderInfusions}
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
