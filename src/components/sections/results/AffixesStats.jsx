import { Attribute } from '@discretize/gw2-ui-new';
import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import React from 'react';

const AffixesStats = ({ data, title }) => {
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
              <TableCell>{data[attribute]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default AffixesStats;
