import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { red, green, grey } from "@material-ui/core/colors";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";


import {LinearPlot} from "./chart";

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  graph: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

export default function RecipeReviewCard({ ticker, id }) {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  var price = data["price"];
  var date = data["date"];
  var pctchange = data["pctchange"];
  var lstpctchange = data["lstpctchange"];
  var mean = data["mean"];
  var variance = data["variance"];

  useEffect(() => {
    if(ticker !== undefined){
      fetch("https://maximejaquier.pythonanywhere.com/" + "?ticker=" + ticker, {
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
    }
  }, []);

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Backtest"
        subheader="performance graph over time"
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
            <>daily variance: {mean.toFixed(2)} %</>
          ) : (
            <>daily variance:</>
          )}
        </Typography>
      </CardActions>
    </Card>
  );
}
