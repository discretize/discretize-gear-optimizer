import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import yaml from 'js-yaml';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePriority, getPriority } from '../../../state/slices/priorities';

export const exampleAffix = `type: quadruple
bonuses:
  major:
    - Power
    - Ferocity
  minor:
    - Precision
    - Vitality`;

export const exampleAffixJson = `{
  "type": "quadruple",
  "bonuses": {
    "major": ["Power", "Ferocity"],
    "minor": ["Precision", "Vitality"]
  }
}`;

function parseInput(str) {
  let parsed = {};
  let error = false;

  if (str) {
    try {
      parsed = JSON.parse(str);
      if (typeof parsed !== 'object') throw new Error('invalid');
    } catch {
      try {
        parsed = yaml.load(str);
        if (typeof parsed !== 'object') throw new Error('invalid');
      } catch {
        error = true;
      }
    }
  }
  return { data: parsed, error };
}

const CustomAffix = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const errorMsg = useSelector(getPriority('customAffixError'));
  const text = useSelector(getPriority('customAffixTextBox'));

  const handleChange = (e) => {
    const val = e.target.value;
    dispatch(changePriority({ key: 'customAffixTextBox', value: val }));

    const { data, error } = parseInput(val);
    dispatch(changePriority({ key: 'customAffix', value: data }));
    dispatch(changePriority({ key: 'customAffixError', value: error ? t('Invalid Format.') : '' }));
  };

  return (
    <>
      <TextField
        label={t('Custom Affix (valid types: "triple," "quadruple," "celestial")')}
        variant="standard"
        sx={{
          width: '100%',
          marginBottom: 1,
        }}
        multiline
        minRows={5}
        value={text}
        error={errorMsg !== ''}
        helperText={errorMsg}
        onChange={handleChange}
      />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            <Trans>Formatting examples</Trans>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={6}>
              <Typography>YAML</Typography>
              <pre style={{ overflow: 'auto hidden' }}>{exampleAffix}</pre>
            </Grid>
            <Grid item xs={6}>
              <Typography>JSON</Typography>
              <pre style={{ overflow: 'auto hidden' }}>{exampleAffixJson}</pre>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default React.memo(CustomAffix);
