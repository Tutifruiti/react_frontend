import React from "react";
import Grid from '@material-ui/core/Grid';
import className from "classnames";

//components
import Stocks from './components/stocks'
import AddForm from './components/addForm'

// styles
import useStyles from "./styles";

// context
import {usePortfolioState} from "../../context/PortfolioContext"


export default function Overview() {
  var classes = useStyles();
  var portfolioState = usePortfolioState();

  return(
    <>
  <div className={classes.root}>
    <Grid container spacing={3}>
      {portfolioState.map((stock) => (
        <Grid key={stock.id} item xs={12} sm = {4}>
          <Stocks ticker={stock.ticker} id={stock.id}/>
        </Grid>
      ))}
    </Grid>
  </div>
  <AddForm/>
  </>
  )
}
