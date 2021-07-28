import * as React from "react";

import { Typography, withStyles } from "@material-ui/core";
import GearOptimizer from "../components/GearOptimizer";
import withLayout from "../hocs/withLayout";

const styles = (theme) => ({
  headline: {
    paddingBottom: theme.spacing(2)
  }
});

// markup
const IndexPage = ({ classes }) => {
  return (
    <>
      <Typography variant="h2" className={classes.headline}>
        Gear Optimizer 2.0
      </Typography>
      <GearOptimizer />
    </>
  );
};

export default withLayout({ disableContainer: false })(withStyles(styles)(IndexPage));
