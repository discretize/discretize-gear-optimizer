import * as React from "react";

import { Typography } from "@material-ui/core";
import Container from "../components/Container";
import GearOptimizer from "../components/GearOptimizer";
import withLayout from "../hocs/withLayout";


// markup
const IndexPage = () => {
  return (
    <>
      <Typography variant="body1">Gear Optimizer 2.0</Typography>
      <GearOptimizer />
    </>
  );
};

export default withLayout({
  disableContainer: false,
  disableBackground: true,
  fabNavigation: false
})(IndexPage);
