import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import classNames from "classnames";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import useStyles from "../styles";

import {usePortfolioDispatch, addItem} from '../../../context/PortfolioContext'

export default function AlertDialog() {

  var classes = useStyles();
  var portfolioDispatch = usePortfolioDispatch();

  // form state
  const [ticker, setTicker] = React.useState('')


  const [open, setOpen] = React.useState(false);

  const updateTicker = (e) => {
    setTicker(e.target.value);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const add = () => {
    setOpen(false);
    addItem(portfolioDispatch, ticker)
  };

  return (
    <>
      <Fab className={classes.floatingButton} onClick={handleClickOpen} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add a new stock"}</DialogTitle>
        <DialogContent>
          <TextField id="standard-basic" label="Ticker" onChange={updateTicker}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={add} color="primary" autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}