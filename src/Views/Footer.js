import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Box, CssBaseline, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  footer: {
    height: 150,
    display: "flex",
    background: "grey",
    padding: theme.spacing(1),
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1),
    alignItems: "center",
    justifyContent: "center",
  },
  footerCredit: {
    height: 50,
    display: "flex",
    background: "#2E2E2E",
    padding: theme.spacing(1),
    alignItems: "center",
    justifyContent: "center",
  },
  end: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    left: 0,
  }
}));

export default function FixedContainer() {
  const classes = useStyles();
  return (
    <>
    <Box className = {classes.end}>
      <Grid container className={classes.footer}>
        <Grid className={classes.footerText} item xs={12} sm={4}>
          <Typography variant="h5">BY</Typography>
          <Typography variant="p">Maxime Jaquier</Typography>
        </Grid>

        <Grid className={classes.footerText} item xs={12} sm={4}>
          <Typography variant="h5">LINK</Typography>
        </Grid>

        <Grid className={classes.footerText} item xs={12} sm={4}>
          <Typography variant="p">Maxime Jaquier</Typography>
        </Grid>
      </Grid>
      <Box className={classes.footerCredit}>
        <Typography color="textPrimary">
          All rights reserved | ©Maxime Jaquier
        </Typography>
      </Box>
    </Box>
    </>
  );
}
