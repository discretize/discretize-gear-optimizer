import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Link,
  Slider,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Trans } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { changeConstraint } from '../../../state/slices/priorities';

// calculated by REMagic!
// https://discord.com/channels/1121166847266537562/1219006517395591259/1228336287417893008
const getRequiredSurvivability = (stacks: number) =>
  (((5150000 * 20) / 9 / 0.67) * (1 + stacks * 0.05)) / 1967;

// eslint-disable-next-line import/prefer-default-export
export function ToFHelper() {
  const dispatch = useDispatch();
  const [targetStacks, setStacks] = useState(-1);

  const survivability =
    targetStacks === -1 ? undefined : 1 + Math.round(1.05 * getRequiredSurvivability(targetStacks));

  useEffect(() => {
    dispatch(
      changeConstraint({
        key: 'minSurvivability',
        value: String(survivability ?? ''),
      }),
    );
  }, [dispatch, survivability]);

  return (
    <Grid size={12}>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            <Trans>Temple of Febe 10% Phase Helper</Trans>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Trans>Survivable Empowered Stacks (Approximate)</Trans>
          </Typography>
          <Box sx={{ margin: '0.5em' }}>
            <Slider
              value={targetStacks}
              min={-1}
              max={100}
              marks={[
                ...[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((value) => ({
                  value,
                  label: value,
                })),
                { value: 53, label: '*' },
              ]}
              onChange={(e, value) => setStacks(value)}
              valueLabelFormat={(value) => (value === -1 ? 'n/a' : value)}
              valueLabelDisplay="auto"
            />
          </Box>

          {survivability !== undefined ? (
            <pre>
              effective health (eHP): {survivability * 1967}
              {'\n'}
              &quot;survivability&quot;: {survivability}
              {'\n'}
              {'\n'}
              {[-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                .map((offset) => {
                  const stacks = targetStacks + offset;
                  if (stacks < 2) return;

                  const pre = `${String(stacks).padStart(3)} empowered`;

                  const minRoll = getRequiredSurvivability(stacks) * 0.95;
                  const maxRoll = getRequiredSurvivability(stacks) * 1.05;

                  if (survivability < minRoll) {
                    return `${pre}: likely downed`;
                  }
                  if (survivability > maxRoll) {
                    const remainingHealthPercentLow = Math.round(
                      (100 * (survivability - maxRoll)) / survivability,
                    );
                    const remainingHealthPercentHigh = Math.round(
                      (100 * (survivability - minRoll)) / survivability,
                    );
                    return `${pre}: likely alive with ~${remainingHealthPercentLow}–${remainingHealthPercentHigh}% health`;
                  }
                  const downPercent = Math.round(
                    (100 * (maxRoll - survivability)) / (maxRoll - minRoll),
                  );
                  return `${pre}: ~${downPercent}% down chance`;
                })
                .filter(Boolean)
                .join('\n')}
            </pre>
          ) : undefined}

          <Typography variant="body2">
            <p>
              An average Enraged Smash hit will down a player with approximately{' '}
              <code>17,081,260 * (1 + 0.05 * empowered stacks)</code> effective health, or
              approximately <code>8684 * (1 + 0.05 * empowered stacks)</code>{' '}
              &quot;survivability&quot;. Enraged Smash damage varies up/down by about 5% from this
              average.
            </p>
            <p>
              The condition virtuoso setup common in many ToF CM strategies has 33627
              &quot;survivability&quot; and can generally survive a 53-empowered-stack smash when at
              full health.
            </p>
            <p>
              A big thanks to{' '}
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCA2rppcdbx1a2CQxS6BqwMQ"
              >
                REMagic <OpenInNewIcon fontSize="inherit" />
              </Link>{' '}
              for this research!
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}
