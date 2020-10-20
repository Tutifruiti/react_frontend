import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Stocks from './components/stocks'

export default function Overview() {
  return(
  <div>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Stocks/>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stocks/>
      </Grid>
    </Grid>
  </div>
  )
}
