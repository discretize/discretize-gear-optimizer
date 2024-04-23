import { Attribute } from '@discretize/gw2-ui-new';
import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';

const EffectiveGainLoss = ({ data, title }) => {
  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <Table padding="none">
        <TableBody>
          {Object.keys(data).map((attribute) => (
            <TableRow hover key={attribute}>
              <TableCell>
                <Attribute name={attribute} style={{ fontSize: '20px', color: '#AAAAAA' }} />
              </TableCell>
              <TableCell align="right">{data[attribute].toFixed?.(2) ?? data[attribute]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default EffectiveGainLoss;
