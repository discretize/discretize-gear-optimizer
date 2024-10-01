import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import { makeStyles } from 'tss-react/mui';
import { scaleValue } from '../../../state/optimizer/optimizerCore';
import { parseAmount } from '../../../utils/usefulFunctions';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
  },
  gw2Item: {
    fontSize: '20px',
    color: '#AAAAAA',
  },
}));

const roundTwo = (num) => Math.round(num * 100) / 100;

const AppliedModifiers = ({ character }) => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  const appliedModifiers = character?.settings?.appliedModifiers ?? [];

  const gameMode = character?.settings?.gameMode;
  const isWvW = gameMode === 'wvw';

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>
          <Trans>Applied Modifers</Trans>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Table padding="none">
          <TableBody>
            {appliedModifiers.map(({ type, id, modifiers, wvwModifiers, amount, amountData }) => {
              const { value: amountInput } = parseAmount(amount);
              const multiplierNote = amountData
                ? `${roundTwo(scaleValue(1, amountInput, amountData))}x`
                : '';
              return (
                <TableRow hover key={`${type} ${id}`}>
                  <TableCell>
                    <Typography className={classes.gw2Item}> {id} </Typography>
                  </TableCell>
                  <TableCell style={{ paddingRight: 8 }}>
                    <Typography variant="body2">{multiplierNote}</Typography>
                  </TableCell>
                  <TableCell>
                    {isWvW && wvwModifiers ? 'WvW: ' : ''}
                    {JSON.stringify(isWvW ? (wvwModifiers ?? modifiers) : modifiers)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Button
          variant="contained"
          onClick={() => {
            navigator.clipboard.writeText(JSON.stringify(character, null, 2));
            // eslint-disable-next-line no-alert
            alert('copied raw character data JSON!');
          }}
        >
          {t('copy raw data to clipboard')}
        </Button>
      </AccordionDetails>
    </Accordion>
  );
};

export default AppliedModifiers;
