import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid2 as Grid,
  TextField,
  Typography,
} from '@mui/material';
import yaml from 'js-yaml';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { exampleModifiers, exampleModifiersJson } from '../../../assets/modifierdata/metadata';
import {
  changeExtraModifiers,
  changeExtraModifiersError,
  changeExtraModifiersText,
  getExtraModifiersError,
  getExtraModifiersTextBox,
} from '../../../state/slices/extraModifiers';

function parseInput(str: string) {
  let parsed: unknown = [];
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
  if (error) parsed = [];
  return { data: Array.isArray(parsed) ? parsed : [parsed], error };
}

const ExtraModifiers = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const errorMsg = useSelector(getExtraModifiersError);
  const text = useSelector(getExtraModifiersTextBox);

  return (
    <>
      <TextField
        label={t('Extra Modifiers')}
        variant="standard"
        sx={{
          width: '100%',
          marginBottom: 1,
        }}
        slotProps={{
          input: {
            sx: {
              fontFamily: 'Fira Mono',
              fontSize: '0.875rem',
            },
          },
        }}
        multiline
        minRows={5}
        value={text}
        error={errorMsg !== ''}
        helperText={errorMsg}
        onChange={(e) => {
          const val = e.target.value;
          dispatch(changeExtraModifiersText(val));

          const { data, error } = parseInput(val);
          dispatch(changeExtraModifiers(data));
          dispatch(changeExtraModifiersError(error ? t('Invalid Format.') : ''));
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
              <pre style={{ overflow: 'auto hidden' }}>{exampleModifiers}</pre>
            </Grid>
            <Grid size={6}>
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
