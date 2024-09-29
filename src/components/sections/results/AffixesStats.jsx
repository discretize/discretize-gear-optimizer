import { Attribute } from '@discretize/gw2-ui-new';
import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';

const AffixesStats = ({ data, title }) => {
  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <Table padding="none">
        <TableBody>
          {Object.entries(data)
            .filter(([_, value]) => value)
            .map(([attribute, value]) => (
              <TableRow hover key={attribute}>
                <TableCell>
                  <Attribute name={attribute} style={{ fontSize: '20px', color: '#AAAAAA' }} />
                </TableCell>
                <TableCell align="right">{value}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
};

export default AffixesStats;
