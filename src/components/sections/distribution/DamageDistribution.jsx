import {
  Box,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  makeStyles,
  Slider,
  Typography,
} from '@material-ui/core';
import classNames from 'classnames';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Attribute as AttributeRaw, Condition as ConditionRaw } from 'gw2-ui-bulk';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeAllDistributionsOld,
  changeDistributionNew,
  changeTextBoxes,
  getDistributionNew,
  getDistributionOld,
  getDistributionVersion,
  getTextBoxes,
} from '../../../state/slices/distribution';
import { parseDistribution } from '../../../utils/usefulFunctions';

const Attribute = React.memo(AttributeRaw);
const Condition = React.memo(ConditionRaw);

const roundOne = (num) => Math.round(num * 10) / 10;

const useStyles = makeStyles((theme) => ({
  textbox: {
    maxWidth: 195,
    marginBottom: theme.spacing(2),
  },
  slider: {
    margin: theme.spacing(2),
    minWidth: 200,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(5),
    },
  },
  percentSliderRail: {
    opacity: 1,
  },
}));

const DISTRIBUTION_NAMES = [
  { name: 'Power', min: 0, max: 6000, step: 10, color: '#b1b1b5' },
  { name: 'Burning', min: 0, max: 60, step: 0.1 },
  { name: 'Bleeding', min: 0, max: 60, step: 0.1 },
  { name: 'Poisoned', min: 0, max: 60, step: 0.1 },
  { name: 'Torment', min: 0, max: 60, step: 0.1 },
  { name: 'Confusion', min: 0, max: 60, step: 0.1 },
];

const DamageDistribution = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const version = useSelector(getDistributionVersion);
  const distributionOld = useSelector(getDistributionOld); // actual real selected damage distribution at any time
  const distributionNew = useSelector(getDistributionNew);
  const { t } = useTranslation();

  // locally displayed in the text boxes. Text boxes might contain a string that is not a real number (yet), so we need to store those separately
  const textBoxes = useSelector(getTextBoxes);

  // const initialPercentDistribution = Object.values(coefficientsToPercents(distributionNew, true));
  const percentToState = (percentDistribution) => {
    return [0, 1, 2, 3, 4].map((i) => {
      let total = 0;
      for (let j = 0; j <= i; j++) {
        total += percentDistribution[j];
      }
      return Math.min(total, 100);
    });
  };

  // eslint-disable-next-line id-length
  const onUpdateOld = (_, value) => {
    const distributionRecalc = [];
    let prev = 0;
    for (let i = 0; i < value.length; i++) {
      distributionRecalc.push(value[i] - prev);
      prev = value[i];
    }
    distributionRecalc.push(100 - prev);
    const percentDistribution = {
      Power: distributionRecalc[0],
      Burning: distributionRecalc[1],
      Bleeding: distributionRecalc[2],
      Poisoned: distributionRecalc[3],
      Torment: distributionRecalc[4],
      Confusion: distributionRecalc[5],
    };

    dispatch(changeAllDistributionsOld(percentDistribution));
  };

  const SliderOld = () => {
    return (
      <>
        <div className={classes.sliderWrapper}>
          <Slider
            classes={{ rail: classes.percentSliderRail }}
            value={percentToState(Object.values(distributionOld))}
            onChange={onUpdateOld}
            valueLabelDisplay="auto"
            track={false}
            aria-labelledby="range-slider"
            marks={[...Array(11).keys()]
              .map((value) => value * 10)
              .map((value) => ({ value, label: `${value}` }))}
          />
        </div>
        <Grid container spacing={2}>
          {DISTRIBUTION_NAMES.map((dist) => (
            <Grid key={dist.name} item xs>
              <Typography style={{ whiteSpace: 'nowrap' }}>
                {dist.name === 'Power' ? (
                  <Attribute name="Power" style={{ whiteSpace: 'nowrap' }} />
                ) : (
                  <Condition name={dist.name} disableLink style={{ whiteSpace: 'nowrap' }} />
                )}{' '}
                {roundOne(distributionOld[dist.name])}%
              </Typography>
            </Grid>
          ))}
        </Grid>
      </>
    );
  };

  // eslint-disable-next-line id-length
  const onUpdateNew = (key) => (_, value) => {
    dispatch(changeTextBoxes({ index: key, value: Math.round(value * 100) / 100 }));
    dispatch(changeDistributionNew({ index: key, value: Math.round(value * 100) / 100 }));
  };

  const handleChangeTextNew = (key) => (e) => {
    const { value } = e.target;
    dispatch(changeTextBoxes({ index: key, value }));

    const parsedValue = parseDistribution(value).value;
    dispatch(changeDistributionNew({ index: key, value: parsedValue }));
  };
  const SlidersNew = () => {
    return DISTRIBUTION_NAMES.map((dist, index) => (
      <Box display="flex" flexWrap="wrap" key={`distriNew_${dist.name}`}>
        <Box>
          <FormControl className={classNames(classes.margin, classes.textbox)}>
            <InputLabel htmlFor={`input-with-icon-adornment-${index}`}>
              {dist.name === 'Power' ? (
                <Attribute name="Power" text={t('Power Coefficient')} />
              ) : (
                <Condition
                  name={dist.name}
                  text={
                    // i18next-extract-mark-context-next-line ["Burning","Bleeding","Poisoned","Torment", "Confusion"]
                    t(`avgStacks`, { context: dist.name })
                  }
                />
              )}
            </InputLabel>
            <Input
              id={`input-with-icon-adornment-${index}`}
              value={textBoxes[dist.name]}
              endAdornment={
                <InputAdornment position="end">
                  {dist.name === 'Power' ? (
                    <Attribute name="Power" disableLink disableText />
                  ) : (
                    <Condition name={dist.name} disableLink disableText />
                  )}
                </InputAdornment>
              }
              error={parseDistribution(textBoxes[dist.name]).error}
              onChange={handleChangeTextNew(dist.name)}
              autoComplete="off"
            />
          </FormControl>
        </Box>
        <Box flexGrow={1} alignSelf="center" ml={2}>
          <Slider
            value={distributionNew[dist.name]}
            step={dist.step}
            marks={[...Array(7).keys()]
              .map((value) => value * ((dist.max - dist.min) / 6))
              .map((value) => ({
                value,
                label: `${value}`,
              }))}
            min={dist.min}
            max={dist.max}
            onChange={onUpdateNew(dist.name)}
            valueLabelDisplay="auto"
          />
        </Box>
      </Box>
    ));
  };

  return version === 1 ? SliderOld() : SlidersNew();
};

export default DamageDistribution;
