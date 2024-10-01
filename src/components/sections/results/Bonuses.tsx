import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';

const Bonuses = ({ data, title }) => {
  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <Table padding="none">
        <TableBody>
          {Object.keys(data).map((attribute) => (
            <TableRow hover key={attribute}>
              <TableCell>
                <Typography sx={{ fontSize: '18px', color: '#AAAAAA' }}>{attribute}</Typography>
              </TableCell>
              <TableCell align="right">{data[attribute]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Bonuses;
