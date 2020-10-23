import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, green } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import DeleteIcon from '@material-ui/icons/Delete';


import {usePortfolioDispatch, deleteItem} from '../../../context/PortfolioContext'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  graph: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
}));

export default function RecipeReviewCard({ticker, id}) {
  const classes = useStyles();
  var portfolioDispatch = usePortfolioDispatch();

  const deleteStock = () => {
    deleteItem(portfolioDispatch, ticker)
  };

  const lastPrice = 12.32;
  const lastChange = 0.36

  return (
    <Card className={classes.root}>
      <CardHeader
        title={ticker}
        subheader={lastPrice}
        action={
          <IconButton aria-label="delete" onClick={deleteStock}>
            <DeleteIcon />
          </IconButton>
        }
        avatar={
          lastChange > 0
          ? <FiberManualRecordIcon style={{ color: green[500] }} />
          : <FiberManualRecordIcon style={{ color: red[500] }} />
        }
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {id}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

      </CardActions>
    </Card>
  );
}
