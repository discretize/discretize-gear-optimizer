import * as React from "react";

import { Typography } from "@material-ui/core";
import Container from "../components/Container";
import GearOptimizer from "../components/GearOptimizer";


// markup
const IndexPage = () => {
  return (
    <Container>
      <Typography variant={"h2"}>Gear Optimizer 2.0</Typography>
      <GearOptimizer />
    </Container>
  );
};

export default IndexPage;
