import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import yaml from 'js-yaml';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeCustomAffix,
  changeCustomAffixError,
  changeCustomAffixTextBox,
  getCustomAffixError,
  getCustomAffixText,
} from '../../../state/slices/priorities';

const exampleAffix = `type: quadruple
bonuses:
  major:
    - Power
    - Ferocity
  minor:
    - Precision
    - Vitality`;

const exampleAffixJson = `{
  "type": "quadruple",
  "bonuses": {
    "major": ["Power", "Ferocity"],
    "minor": ["Precision", "Vitality"]
  }
}`;

function parseInput(str: string) {
  let parsed: unknown = {};
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
  if (error) parsed = {};
  return { data: parsed as object, error };
}

const CustomAffix = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const errorMsg = useSelector(getCustomAffixError);
  const text = useSelector(getCustomAffixText);

  return (
    <>
      <TextField
        placeholder={t('(valid types: "triple," "quadruple," "celestial")')}
        variant="standard"
        sx={{
          width: '100%',
          marginBottom: 1,
        }}
        slotProps={{
          input: {
            sx: {
              fontFamily: 'Fira Mono',
            },
          },
        }}
        multiline
        minRows={4}
        value={text}
        error={errorMsg !== ''}
        helperText={errorMsg}
        onChange={(e) => {
          const val = e.target.value;
          dispatch(changeCustomAffixTextBox(val));

          const { data, error } = parseInput(val);
          dispatch(changeCustomAffix(data));
          dispatch(changeCustomAffixError(error ? t('Invalid Format.') : ''));
        }}
      />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            <Trans>Formatting examples</Trans>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid size={6}>
              <Typography>YAML</Typography>
              <pre style={{ overflow: 'auto hidden' }}>{exampleAffix}</pre>
            </Grid>
            <Grid size={6}>
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
