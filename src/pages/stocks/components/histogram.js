import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Skeleton from '@material-ui/lab/Skeleton';

import { BarPlot } from "./chart";

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

export default function Histogram() {
  var portfolioState = usePortfolioState();

  const classes = useStyles();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  var value = data["data"];
  var label = data["label"];
  var name = data["name"]

  const getApiString = () => {
    let stocks = [];
    portfolioState.map((stock) => {
      stocks.push(stock.ticker);
    });
    return { ticker: stocks };
  };

  useEffect(() => {
    setLoad(false);
    console.log("histogram");
    fetch("https://maximejaquier.pythonanywhere.com/stocks/histogram", {
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
        },
        (error) => {
          console.log(error)
          setLoad(false);
        }
      );
  }, [portfolioState.length]);

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Histogram"
        subheader="Histogram of past performance"
      />
      <CardContent>
        {load ? <BarPlot data={value} label={label} name={name} /> : <Skeleton variant="rect" width={766} height={329} />}
      </CardContent>
    </Card>
  );
}
