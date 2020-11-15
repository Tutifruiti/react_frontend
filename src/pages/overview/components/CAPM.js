import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red, green, grey } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";

import Plot from "./chart";

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

export default function RecipeReviewCard({ ticker, id }) {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  var portfolioDispatch = usePortfolioDispatch();

  const deleteStock = () => {
    deleteItem(portfolioDispatch, ticker);
  };

  var price = data["price"];
  var date = data["date"];

  useEffect(() => {
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
  }, []);

  return (
    <Card className={classes.root}>
      <CardHeader
        title="CAPM"
        subheader="Capital asset pricing model "
      />
      <CardContent>
        {load ? <Plot price={price} date={date} /> : "loading"}
      </CardContent>
      <CardActions>
        <Typography variant="body2" color="textSecondary" component="p">
        </Typography>
      </CardActions>
    </Card>
  );
}
