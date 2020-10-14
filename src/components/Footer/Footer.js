import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

// styles
import useStyles from "./styles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="">
        Maxime Jaquier
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
    var classes = useStyles();
  
    return (
      <div className={classes.root}>
        <footer className={classes.footer}>
          <Container maxWidth="sm" align="center">
            <Typography variant="body1">Build on top of React - Material-UI</Typography>
            <Copyright />
          </Container>
        </footer>
      </div>
    );
  }