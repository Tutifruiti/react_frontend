import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

import Plot from "./chart";

// context
import { usePortfolioState } from "../../../context/PortfolioContext";

const useStyles = makeStyles((theme) => ({
  root: {
    
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

  var tickers = data["tickers"]
  var variance = data["variance"];
  var mean = data["mean"];

  const getApiString = () => {
    let apiString = ''
    portfolioState.map((stock) => {
      apiString = apiString + stock.ticker + '&'
    })
    return apiString.slice(0, -1)
  }

  useEffect(() => {
      fetch("https://maximejaquier.pythonanywhere.com/" + "?CAPM=" + getApiString(), {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        dataType: "jsonp",
      })
        .then((response) => response.json())
        .then(
          (data) => {
            setData(data);
            setLoad(true);
            console.log(data);
          },
          (error) => {
            setLoad(false);
          }
        );
    
  },);

  return (
    <Card className={classes.root}>
      <CardHeader
        title="CAPM"
        subheader="Capital asset pricing model "
      />
      <CardContent>
        {load ? <Plot price={mean} date={variance} /> : "loading"}
      </CardContent>
      <CardActions>
        <Typography variant="body2" color="textSecondary" component="p">
        </Typography>
      </CardActions>
    </Card>
  );
}
