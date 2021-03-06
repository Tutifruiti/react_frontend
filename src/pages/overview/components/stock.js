import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red, green, grey } from "@material-ui/core/colors";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import DeleteIcon from "@material-ui/icons/Delete";

import {LinearPlot} from "./chart";

import {
  usePortfolioDispatch,
  deleteItem,
} from "../../../context/PortfolioContext";

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  graph: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

export default function Stock({ticker}) {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  var portfolioDispatch = usePortfolioDispatch();

  const deleteStock = () => {
    deleteItem(portfolioDispatch, ticker);
  };

  var price = data["price"];
  var date = data["date"];
  var pctchange = data["pctchange"];
  var lstpctchange = data["lstpctchange"];
  var mean = data["mean"];
  var variance = data["variance"];

  useEffect(() => {
    if(ticker !== undefined){
      if(load === false){
        fetch("https://maximejaquier.pythonanywhere.com/ticker", {
          method: 'POST',
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ticker: ticker}),
        })
        .then((response) => response.json())
        .then(
          (data) => {
            setData(data);
            setLoad(true);
          },
          (error) => {
            setLoad(false);
          }
        );
      }
    }
  }, []);
    

  return (
    <Card className={classes.root}>
      <CardHeader
        title={ticker}
        subheader={load ? price[price.length - 1].toFixed(2) : "loading"}
        action={
          <IconButton aria-label="delete" onClick={deleteStock}>
            <DeleteIcon />
          </IconButton>
        }
        avatar={
          load ? (
            lstpctchange > 0 ? (
              <FiberManualRecordIcon style={{ color: green[500] }} />
            ) : (
              <FiberManualRecordIcon style={{ color: red[500] }} />
            )
          ) : (
            <FiberManualRecordIcon style={{ color: grey[500] }} />
          )
        }
      />
      <CardContent>
        {load ? <LinearPlot price={price} date={date} /> : "loading"}
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
