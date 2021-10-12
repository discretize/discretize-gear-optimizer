import {
  TextField,
  withStyles,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import yaml from 'js-yaml';
import {
  changeExtraModifiers,
  changeExtraModifiersError,
  getExtraModifiers,
} from '../../../state/slices/extraModifiers';
import { exampleModifiers, exampleModifiersJson } from '../../../assets/modifierdata/metadata';

const styles = (theme) => ({
  text: {
    width: '100%',
  },
});

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

const ExtraModifiers = ({ classes }) => {
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
        className={classes.text}
        multiline
        minRows={5}
        value={text}
        error={errorMsg !== ''}
        helperText={errorMsg}
        onChange={handleChange}
      />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>t(Formatting examples)</Typography>
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

export default withStyles(styles)(ExtraModifiers);
