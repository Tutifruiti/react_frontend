import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Skeleton from '@material-ui/lab/Skeleton';

import {ScatterPlot} from "./chart";

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

export default function CAPM() {
  var portfolioState = usePortfolioState();

  const classes = useStyles();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

 var plot=data['plot']
 var name=data['name']

  const getApiString = () => {
    let stocks = []
    portfolioState.map((stock) => {
      stocks.push(stock.ticker)
    })
    return {'ticker': stocks}
  }

  useEffect(() => {
      setLoad(false)
      fetch("https://maximejaquier.pythonanywhere.com/CAPM", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(getApiString())
      })
        .then((response) => response.json())
        .then(
          (data) => {
            setData(data);
            setLoad(true)
          },
          (error) => {
            setLoad(false)
          }
        );
  },[portfolioState.length]);

  return (
    <Card className={classes.root}>
      <CardHeader
        title="CAPM"
        subheader="Capital asset pricing model"
      />
      <CardContent>
        {load ? <ScatterPlot plot={plot} name={name} /> :  <Skeleton variant="rect" width={766} height={329} />}
      </CardContent>
      <CardActions>
        <Typography variant="body2" color="textSecondary" component="p">
          x axis: variance ;  y axis: mean
        </Typography>
      </CardActions>
    </Card>
  );
}
