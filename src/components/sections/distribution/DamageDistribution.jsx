import { Attribute as AttributeRaw, Condition as ConditionRaw } from '@discretize/gw2-ui-new';
import { Box, FormControl, Input, InputAdornment, InputLabel, Slider } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import {
  changeDistributionNew,
  changeTextBoxes,
  getDistributionNew,
  getTextBoxes,
} from '../../../state/slices/distribution';
import { parseDistribution } from '../../../utils/usefulFunctions';
import TemplateInfo from '../../TemplateInfo';
import useAlternativeDamage from '../../baseComponents/useAlternativeDamage';

const Attribute = React.memo(AttributeRaw);
const Condition = React.memo(ConditionRaw);

const useStyles = makeStyles()((theme) => ({
  textbox: {
    maxWidth: 195,
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
  { name: 'Power2', min: 0, max: 6000, step: 10, color: '#b1b1b5' },
  { name: 'Burning', min: 0, max: 60, step: 0.1 },
  { name: 'Bleeding', min: 0, max: 60, step: 0.1 },
  { name: 'Poisoned', min: 0, max: 60, step: 0.1 },
  { name: 'Torment', min: 0, max: 60, step: 0.1 },
  { name: 'Confusion', min: 0, max: 60, step: 0.1 },
];

const DamageDistribution = () => {
  const { classes } = useStyles();

  const dispatch = useDispatch();
  const distributionNew = useSelector(getDistributionNew);
  const { t } = useTranslation();

  // locally displayed in the text boxes. Text boxes might contain a string that is not a real number (yet), so we need to store those separately
  const textBoxes = useSelector(getTextBoxes);

  const onUpdate = (key) => (_, value) => {
    dispatch(changeTextBoxes({ index: key, value: Math.round(value * 100) / 100 }));
    dispatch(changeDistributionNew({ index: key, value: Math.round(value * 100) / 100 }));
  };

  const handleChangeTextNew = (key) => (e) => {
    const { value } = e.target;
    dispatch(changeTextBoxes({ index: key, value }));

    const parsedValue = parseDistribution(value).value;
    dispatch(changeDistributionNew({ index: key, value: parsedValue }));
  };

  const [alternativeDamageLabel, alternativeDamageEnabled] = useAlternativeDamage();

  // shows the slider (faded) if the user switched classes and left a nonzero value
  const showAlternativeDamage = alternativeDamageEnabled || distributionNew.Power2;

  const controls = DISTRIBUTION_NAMES.map((dist, index) => {
    let style;
    if (dist.name === 'Power2') {
      if (!showAlternativeDamage) return null;
      if (!alternativeDamageEnabled) style = { opacity: 0.5 };
    }
    return (
      <Box key={`distriNew_${dist.name}`} style={style} sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <Box>
          <FormControl mb={1} className={classes.textbox} variant="standard">
            <InputLabel htmlFor={`input-with-icon-adornment-${index}`}>
              {dist.name.startsWith('Power') ? (
                <Attribute
                  name="Power"
                  disableLink
                  text={dist.name === 'Power2' ? alternativeDamageLabel : undefined}
                />
              ) : (
                <Condition
                  name={dist.name}
                  disableLink
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
                  {dist.name.startsWith('Power') ? (
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
        <Box
          sx={{
            flexGrow: 1,
            alignSelf: 'center',
            mx: 3,
            mb: 4,
            minWidth: 200,
            md: { marginLeft: 2 },
          }}
        >
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
            onChange={onUpdate(dist.name)}
            valueLabelDisplay="auto"
          />
        </Box>
      </Box>
    );
  });

  return (
    <>
      {controls}
      <TemplateInfo />
    </>
  );
};

export default DamageDistribution;
