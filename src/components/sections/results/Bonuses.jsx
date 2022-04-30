import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import React from 'react';

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
              <TableCell>{data[attribute]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Bonuses;
