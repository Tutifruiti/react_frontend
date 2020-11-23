import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Skeleton from '@material-ui/lab/Skeleton';

import { LinearPlot } from "./chart";

// context
import { usePortfolioState } from "../../../context/PortfolioContext";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  graph: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

export default function Backtest() {
  var portfolioState = usePortfolioState();

  const classes = useStyles();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  var value = data["value"];
  var date = data["date"];
  var mean = data["mean"];
  var variance = data["variance"]

  

  const getApiString = () => {
    let stocks = [];
    portfolioState.map((stock) => {
      stocks.push(stock.ticker);
    });
    return { ticker: stocks };
  };

  useEffect(() => {
    setLoad(false);
    console.log("backtest");
    fetch("https://maximejaquier.pythonanywhere.com/backtest", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(getApiString()),
    })
      .then((response) => response.json())
      .then(
        (data) => {
          setData(data);
          setLoad(true);
          console.log(data);
        },
        (error) => {
          console.log(error)
          setLoad(false);
          console.log(data);
        }
      );
  }, [portfolioState.length]);

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Backtest"
        subheader="performance graph over time with equal weights"
      />
      <CardContent>
        {load ? <LinearPlot price={value} date={date} /> : <Skeleton variant="rect" width={766} height={329} />}
      </CardContent>
      <CardActions>
        <Typography variant="body2" color="textSecondary" component="p">
          {load ? <>daily mean: {mean.toFixed(2)} %</> : <>daily mean:</>}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {load ? (
            <>daily variance: {variance.toFixed(2)} %</>
          ) : (
            <>daily variance:</>
          )}
        </Typography>
      </CardActions>
    </Card>
  );
}
