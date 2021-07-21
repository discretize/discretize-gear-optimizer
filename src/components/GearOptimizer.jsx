import React from 'react';
import {
  Checkbox,
  Typography,
  withStyles,
} from '@material-ui/core';

import { Skill, TraitLine } from 'gw2-ui';

const styles = (theme) => ({
  root: {
    // adds padding on bigger (non smartphone) screens
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
});

const GearOptimizer = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h4">Traits</Typography>
      <TraitLine id={4} selectable />
      <TraitLine id={11} selectable />
      <TraitLine id={22} selectable />
      <TraitLine id={36} selectable />
      <TraitLine id={51} selectable />
      <TraitLine id={18} selectable />
      <TraitLine id={61} selectable />
      <Typography variant="h4">Skills</Typography>
      <Checkbox /> <Skill id="14410" size="large"/>
    </div>
  );
};
export default withStyles(styles)(GearOptimizer);