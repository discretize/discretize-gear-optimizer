import * as React from 'react';

import { Link, Typography, withStyles } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import GitHubIcon from '@material-ui/icons/GitHub';
import GearOptimizer from '../components/GearOptimizer';
import withLayout from '../hocs/withLayout';

const styles = (theme) => ({
  headline: {
    paddingBottom: theme.spacing(2),
  },
});

// markup
const IndexPage = ({ classes }) => {
  return (
    <>
      <MuiAlert elevation={6} variant="filled" severity="warning">
        The gear optimizer is currently in beta! Templates are not final and phantasm and lifesteal
        damage is inaccurate. Please report potential issues to us in{' '}
        <Link href="https://discord.gg/Qdt7nFY" color="textPrimary">
          Discord
        </Link>{' '}
        or{' '}
        <Link
          href="https://github.com/discretize/discretize-gear-optimizer/tree/react-recode"
          color="textPrimary"
        >
          <GitHubIcon fontSize="small" /> Github
        </Link>
        .
      </MuiAlert>
      <Typography variant="h2" className={classes.headline}>
        Gear Optimizer
      </Typography>
      <GearOptimizer />
    </>
  );
};

export default withLayout({ disableContainer: false })(withStyles(styles)(IndexPage));
