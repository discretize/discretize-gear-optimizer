import * as React from 'react';

import { Link, Typography, withStyles } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import GearOptimizer from '../components/GearOptimizer';
import withLayout from '../hocs/withLayout';
import GitHubIcon from '@material-ui/icons/GitHub';

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
        The gear optimizer is currently in beta! Please report potential issues to us in{' '}
        <Link href="https://discord.gg/Qdt7nFY" color="black">
          Discord
        </Link>{' '}
        or{' '}
        <Link href="https://github.com/discretize/discretize-gear-optimizer" color="black">
          <GitHubIcon fontSize="small" />
          Github
        </Link>
      </MuiAlert>
      <Typography variant="h2" className={classes.headline}>
        Gear Optimizer
      </Typography>
      <GearOptimizer />
    </>
  );
};

export default withLayout({ disableContainer: false })(withStyles(styles)(IndexPage));
