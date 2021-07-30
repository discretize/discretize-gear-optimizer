import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { useSelector } from "react-redux";
import { getList } from "../state/gearOptimizerSlice";

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();

  const list = useSelector(getList) || [];

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
            <TableCell>Damage</TableCell>
            <TableCell align="right">Helm</TableCell>
            <TableCell align="right">Shld</TableCell>
            <TableCell align="right">Coat</TableCell>
            <TableCell align="right">etc</TableCell>
            <TableCell align="right">etc</TableCell>
            <TableCell align="right">etc</TableCell>
            <TableCell align="right">etc</TableCell>
            <TableCell align="right">etc</TableCell>
            <TableCell align="right">etc</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map(character => (
              <TableRow key={character.id}>
                <TableCell component="th" scope="row">
                  {character.attributes['Damage'].toFixed(2)}
                </TableCell>
                {character.gear.map((element, index) => (
                  <TableCell align="right" key={index}>{element}</TableCell>
                ))
                }
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
