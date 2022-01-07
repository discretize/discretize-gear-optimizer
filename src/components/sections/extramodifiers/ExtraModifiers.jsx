import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import yaml from 'js-yaml';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { exampleModifiers, exampleModifiersJson } from '../../../assets/modifierdata/metadata';
import {
  changeExtraModifiers,
  changeExtraModifiersError,
  getExtraModifiers,
} from '../../../state/slices/extraModifiers';

function parseInput(str) {
  let parsed = [];
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
  return { data: Array.isArray(parsed) ? parsed : [parsed], error };
}

const ExtraModifiers = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const errorMsg = useSelector(getExtraModifiers('error'));
  const text = useSelector(getExtraModifiers('textBox'));

  const handleChange = (e) => {
    const val = e.target.value;
    dispatch(changeExtraModifiers({ key: 'textBox', value: val }));

    const { data, error } = parseInput(val);
    dispatch(changeExtraModifiers({ key: 'extraModifiers', value: data }));
    dispatch(changeExtraModifiersError(error ? t('Invalid Format.') : ''));
  };
  return (
    <>
      <TextField
        label={t('Extra Modifiers')}
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
              <pre style={{ overflow: 'auto hidden' }}>{exampleModifiers}</pre>
            </Grid>
            <Grid item xs={6}>
              <Typography>JSON</Typography>
              <pre style={{ overflow: 'auto hidden' }}>{exampleModifiersJson}</pre>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ExtraModifiers;
