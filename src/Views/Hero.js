import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  hero: {
    height: 450,
    display: "flex",
    background: "grey",
    padding: theme.spacing(1),
    margin: "auto",
  },
  heroText: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1),
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function FixedContainer() {
  const classes = useStyles();
  return (
    <Box className={classes.hero}>
      <Box className={classes.heroText}>
        <Typography variant="h3">One step at a time</Typography>
        <Typography variant="h4">Life is easy</Typography>
      </Box>
    </Box>
  );
}
