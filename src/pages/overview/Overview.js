import React from "react";
import Grid from "@material-ui/core/Grid";

//components
import Stocks from "./components/stocks";
import AddForm from "./components/addForm";
import CAPM from "./components/CAPM";
import Backtest from "./components/backtest";

// styles
import useStyles from "./styles";

// context
import { usePortfolioState } from "../../context/PortfolioContext";

export default function Overview() {
  var classes = useStyles();
  var portfolioState = usePortfolioState();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <CAPM />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Backtest />
          </Grid>

          {portfolioState.map((stock) => (
            <Grid key={stock.ticker} item xs={12} sm={3}>
              <Stocks ticker={stock.ticker} />
            </Grid>
          ))}
        </Grid>
      </div>
      <AddForm />
    </>
  );
}
