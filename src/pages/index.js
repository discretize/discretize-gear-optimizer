import * as React from 'react';

import { Typography, withStyles } from '@material-ui/core';
import GearOptimizer from '../components/GearOptimizer';
import withLayout from '../hocs/withLayout';
import { withBulkRequest } from 'gw2-ui-bulk';

const styles = (theme) => ({
  headline: {
    paddingBottom: theme.spacing(2),
  },
});

// markup
const IndexPage = ({ classes }) => {
  require('react-dom');
  window.React2 = require('react');
  console.log(window.React1 === window.React2);
  return (
    <>
      <Typography variant="h2" className={classes.headline}>
        Gear Optimizer 2.0
      </Typography>
      <GearOptimizer />
    </>
  );
};

export default withBulkRequest(
  'index',
  withLayout({ disableContainer: false })(withStyles(styles)(IndexPage)),
);
