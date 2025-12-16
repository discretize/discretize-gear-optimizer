import { Attribute } from '@discretize/gw2-ui-new';
import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import type { Character } from '../../../state/optimizer/types/optimizerTypes';
import { objectEntries } from '../../../utils/usefulFunctions';

const roundTwo = (num: number) => Math.round(num * 100) / 100;

const AffixesStats = ({ data, title }: { data: Character['gearStats']; title: string }) => {
  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <Table padding="none">
        <TableBody>
          {objectEntries(data)
            .filter(([_, value]) => value)
            .map(([attribute, value]) => (
              <TableRow hover key={attribute}>
                <TableCell>
                  <Attribute name={attribute} style={{ fontSize: '20px', color: '#AAAAAA' }} />
                </TableCell>
                <TableCell align="right">{roundTwo(value)}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
};

export default AffixesStats;
