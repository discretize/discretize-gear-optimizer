// todo: replace this whole thing with a scrolling table (possibly virtual)

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { useSelector } from "react-redux";
import { getList } from "../state/gearOptimizerSlice";

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
});

function SimpleTable(props) {
  const { classes } = props;

  const list = useSelector(getList) || [];

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {}
            <TableCell>Damage</TableCell>
            <TableCell align="right">Helm</TableCell>
            <TableCell align="right">Shld</TableCell>
            <TableCell align="right">Coat</TableCell>
            <TableCell align="right">look, you get the idea</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map(character => (
            <TableRow key={character.id}>
              <TableCell component="th" scope="row">
                {character.attributes['Damage']}
              </TableCell>
              {character.gear.map((element, index) => (
                <TableCell align="right" key={index}>{element}</TableCell>
              ))
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
