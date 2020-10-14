// Pages
import Overview from "../../pages/overview";
import Stocks from "../../pages/stocks";
import Backtest from "../../pages/backtest"

// Declare all routes with attribute
// Routes are composed of:
// id
// link
// component

const Routes = [
  {
    id: 0,
    link: "/app/overview",
    component: Overview,
  },
  {
    id: 1,
    link: "/app/stocks",
    component: Stocks,
  },
  {
    id: 2,
    link: "/app/backtest",
    component: Backtest,
  },
];

export default Routes;
