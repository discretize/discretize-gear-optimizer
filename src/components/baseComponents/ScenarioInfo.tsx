import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Fab,
  Fade,
  IconButton,
  Typography,
} from '@mui/material';
import { memoize } from 'proxy-memoize';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { createScenarioTemplates } from '../../state/optimizer/createScenarioTemplates';
import { getBuffsModifiers } from '../../state/slices/buffs';
import { getExtraModifiersModifiers } from '../../state/slices/extraModifiers';
import { getExtrasCombinationsAndModifiers } from '../../state/slices/extras';
import { getSkillsModifiers } from '../../state/slices/skills';
import { getTraitsModifiers } from '../../state/slices/traits';
import type { RootState } from '../../state/store';

const roundTwo = (num: number) => Math.round(num * 100) / 100;

const getSharedModifiersInfo = memoize((state: RootState) => {
  try {
    const sharedAdvancedUptimeModifiers = [
      ...getBuffsModifiers(state),
      ...getExtraModifiersModifiers(state),
      ...getSkillsModifiers(state),
      ...getTraitsModifiers(state),
    ].filter(({ amountData }) => amountData?.advancedUptimeSimulation);

    const extrasCombinationsAndModifiers = getExtrasCombinationsAndModifiers(state).map(
      ({ extrasModifiers }) =>
        extrasModifiers.filter(({ amountData }) => amountData?.advancedUptimeSimulation),
    );

    const results = extrasCombinationsAndModifiers.map((extrasModifiers) => {
      const templates = createScenarioTemplates([
        ...sharedAdvancedUptimeModifiers,
        ...extrasModifiers,
      ]);
      const text = templates
        .map(
          ({ fraction, appliedModifiers }) =>
            `  ${roundTwo(fraction * 100)}% weight:\n${appliedModifiers.length ? appliedModifiers.map(({ id }) => `    - ${id}`).join('\n') : '     none'}`,
        )
        .join('\n\n');
      const count = templates.length;
      return { text, count };
    });

    const allText = [...new Set(results.map(({ text }) => text))];
    const allCounts = [...new Set(results.map(({ count }) => count))];

    return {
      text:
        allText.length > 1
          ? allText.map((result, i) => `extras combination ${i + 1}:\n${result}`).join('\n\n\n')
          : allText[0],
      count:
        allCounts.length > 1
          ? `${Math.min(...allCounts)}-${Math.max(...allCounts)}`
          : String(allCounts[0]),
    };
  } catch (e) {
    console.error(e);
    return { text: String(e), count: '?' };
  }
});

const useStyles = makeStyles()((theme) => ({
  ul: {
    'marginBlock': '0',
  },
  pre: {
    fontSize: '1em',
    whiteSpace: 'pre-wrap',
  },
}));

export default function ScenarioInfo() {
  const sharedModifiersInfo = useSelector(getSharedModifiersInfo);

  const { classes } = useStyles();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (
    !sharedModifiersInfo ||
    sharedModifiersInfo.count === '0' ||
    sharedModifiersInfo.count === '1'
  ) {
    return;
  }

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'sticky',
        bottom: '1em',
        margin: '-1em 0 1em 0',
      }}
    >
      <Fab
        size="medium"
        variant="extended"
        color={sharedModifiersInfo.count === '?' ? 'warning' : 'info'}
        onClick={handleOpen}
      >
        Scenarios: {sharedModifiersInfo.count}
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        TransitionComponent={Fade}
        fullWidth
        maxWidth="sm"
        PaperProps={{ elevation: 4 }}
      >
        <DialogTitle display="flex" alignItems="center">
          <InfoIcon sx={{ mr: 1 }} />
          <Typography component="span" sx={{ flexGrow: 1, alignSelf: 'center' }}>
            Advanced Uptime Scenario Info
          </Typography>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body2" mb={2}>
            A percentage uptime has been entered for at least one modifier that uses advanced uptime
            simulation. This is enabled for modifers that can result in a character being impacted
            by the critical chance/condition duration cap only some of the time, and will decrease
            calculation performance.
          </Typography>
          <Typography variant="body2">
            DPS, survivability, and healing scores will be computed as a weighted average of the
            result of each of these scenarios:
          </Typography>
          <br />
          <pre className={classes.pre}>{sharedModifiersInfo.text}</pre>
          {sharedModifiersInfo.count !== '0' &&
            sharedModifiersInfo.count !== '1' &&
            sharedModifiersInfo.count !== '2' && (
              <Typography variant="body2">
                With multiple enabled advanced uptime modifiers, weights are calculated as though
                uptimes are uncorrelated/random; if these weights do not reflect real conditions,
                the optimizer result will be somewhat inaccurate.
              </Typography>
            )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
