import React from "react";

import {
  Home as HomeIcon,
} from "@material-ui/icons";

// Pages
import Overview from "../../pages/overview";
import Stocks from "../../pages/stocks";
import Backtest from "../../pages/backtest"

// Declare all routes with attribute
// Routes are composed of:
// id
// label
// link
// component
// icon
// route
const Structures = [
  { id: 0, type: "title", label: "MENU"},
  { id: 1, type: "divider"},
  {
    id: 2,
    label: "Overview",
    link: "/app/overview",
    icon: <HomeIcon />,
  },
  {
    id: 3,
    label: "Stocks",
    link: "/app/stocks",
    icon: <HomeIcon />,
  },
  {
    id: 4,
    label: "Backtest",
    link: "/app/backtest",
    icon: <HomeIcon />,
  },
];

export default Structures;
