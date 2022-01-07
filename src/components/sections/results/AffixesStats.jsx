import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { Attribute } from 'gw2-ui-bulk';
import React from 'react';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
  },
  gw2Item: {
    fontSize: '20px',
    color: '#AAAAAA',
  },
}));

const AffixesStats = ({ data, title }) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <Table padding="none">
        <TableBody>
          {Object.keys(data).map((attribute) => (
            <TableRow hover key={attribute}>
              <TableCell>
                <Attribute name={attribute} className={classes.gw2Item} />
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
