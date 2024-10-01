import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';

interface BonusesProps {
  data: Record<string, string>;
  title: string;
}

const Bonuses = ({ data, title }: BonusesProps) => {
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
