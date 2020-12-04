import React from "react";
import Grid from "@material-ui/core/Grid";

import ComparativePerformance from "./components/comparativePerformance"
import Histogram from "./components/histogram"

// styles
import useStyles from "./styles";

export default function Stocks() {
  var classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Histogram />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ComparativePerformance />
          </Grid>
        </Grid>
      </div>
    </>
  );
}