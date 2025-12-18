import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import { Grid, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { Trans } from 'react-i18next';
import { allAttributePercentKeys } from '../../../assets/modifierdata/metadata';
import type { Character } from '../../../state/optimizer/types/optimizerTypes';

const roundOne = (num: number) => Math.round(num * 10) / 10;
const roundTwo = (num: number) => Math.round(num * 100) / 100;

const ScenarioAttributeSummary = ({ character }: { character: Character }) => {
  if (character.results.scenarioAttributeSummary) {
    return (
      <>
        <Typography variant="h6">
          <DataSaverOnIcon color="info" fontSize="small" sx={{ marginRight: '0.5ch' }} />
          <Trans>Key Scenario Attributes</Trans>
        </Typography>
        <Grid container spacing={2} mb={2}>
          {Object.entries(character.results.scenarioAttributeSummary).map(
            ([attribute, entries]) => (
              <Grid size={{ xs: 12, sm: 8, md: 4 }}>
                <Table padding="none" sx={{ mb: 0 }}>
                  <TableBody>
                    {entries.map(([value, amount]) => (
                      <TableRow hover key={value}>
                        <TableCell>
                          <Typography sx={{ fontSize: '18px', color: '#AAAAAA' }}>
                            {allAttributePercentKeys.includes(attribute)
                              ? `${(value * 100).toFixed(2)}%`
                              : roundOne(value)}{' '}
                            {attribute}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">{roundTwo(amount * 100)}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Grid>
            ),
          )}
        </Grid>
      </>
    );
  }
};

export default ScenarioAttributeSummary;
