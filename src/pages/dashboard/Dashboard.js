import { Grid } from "@material-ui/core";
import React from "react";

import { Typography } from "../../components/Wrappers";

export default function Dashboard() {
  return (
    <Grid container spacing={4}>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <Typography>First page</Typography>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <Typography>First page</Typography>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <Typography>First page</Typography>
      </Grid>
    </Grid>
  );
}
