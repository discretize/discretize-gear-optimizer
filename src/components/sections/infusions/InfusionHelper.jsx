import {
  Coin as CoinRaw,
  CommonEffect as CommonEffectRaw,
  Item as ItemRaw,
} from '@discretize/gw2-ui-new';
import { TextDivider } from '@discretize/react-discretize-components';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Slider,
  Typography,
} from '@mui/material';
import Alert from '@mui/material/Alert';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
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
  getValidInfusionOptions,
} from '../../../state/slices/infusions';
import { agonyInfusionIds, statInfusionIds } from '../../../utils/gw2-data';
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

const useStyles = makeStyles()((theme) => ({
  bigStyle: { fontSize: 17 },
  sliderMark: {
    transform: 'translateX(-100%)',
    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
  },
}));

const InfusionHelper = () => {
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const { t } = useTranslation();

  const ar = parseAr(useSelector(getAR)).value;
  const maxInfusions = parseInfusionCount(useSelector(getMaxInfusions)).value;
  const infusionOptions = useSelector(getValidInfusionOptions);
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
          mb={3.5}
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
          mb={3.5}
        />

        <CheckboxComponent
          value={singularity}
          checked={singularity}
          label={
            <Typography variant="body2">
              <Trans>
                +5 AR from <CommonEffect name="Rigorous Certainty" disableLink />
              </Trans>
            </Typography>
          }
          onChange={(e) => dispatch(changeSingularity(e.target.checked))}
        />
        <Box sx={{ mb: 2 }}>
          <CheckboxComponent
            value={tear}
            checked={tear}
            label={
              <Typography variant="body2">
                <Trans>
                  +15 AR from <Item id={70596} disableLink /> w/ mastery
                </Trans>
              </Typography>
            }
            onChange={(e) => dispatch(changeTear(e.target.checked))}
          />
        </Box>

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
          mb={2}
          step={1}
          min={0}
          max={18}
          marks
          valueLabelDisplay="auto"
          onChange={handleMaxInfusionsChange}
          aria-labelledby="total-infusion-slots"
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
        <Box sx={{ mb: 2 }}>
          <CheckboxComponent
            value={freeWvW}
            checked={freeWvW}
            label={
              <Typography variant="body2">
                <Trans>Enable free WvW stat infusions</Trans>
              </Typography>
            }
            onChange={(e) => dispatch(changeFreeWvW(e.target.checked))}
          />
        </Box>

        {maxRequiredMatrix ? (
          <>
            <Typography id="owned-matrix">
              <Trans>
                Use Owned <Item id={79230} disableLink />:
              </Trans>
            </Typography>
            <Slider
              value={ownedMatrix}
              mb={2}
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
                let renderInfusions;

                if (statInfusionIds[text] && infusionOptions.length) {
                  renderInfusions = (
                    <>
                      {infusionOptions.map(({ type }) => (
                        <Item id={statInfusionIds[text][type]?.id} disableLink disableText />
                      ))}{' '}
                      <Item
                        id={statInfusionIds[text][infusionOptions.at(-1).type]?.id}
                        disableLink
                        disableIcon
                        disableTooltip
                        text={text}
                      />
                    </>
                  );
                } else if (agonyInfusionIds[text]?.id) {
                  renderInfusions = (
                    <Item
                      id={agonyInfusionIds[text]?.id}
                      disableLink
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
                      text={text.replace('Agony Infusion', t('Agony Infusion'))}
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
