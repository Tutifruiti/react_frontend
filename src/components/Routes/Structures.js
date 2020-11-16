import React from "react";

import {
  Home,
  ShowChart,
  BubbleChart,
  BarChart
} from "@material-ui/icons";

// Declare all structures with attribute
// Strctures are composed of:
// id
// type
// label
// link
// icon
const Structures = [
  { id: 0, type: "title", label: "MENU"},
  { id: 1, type: "divider"},
  {
    id: 2,
    label: "Overview",
    link: "/app/overview",
    icon: <Home />,
  },
  { id: 3, type: "divider"},
  {
    id: 4,
    label: "Stocks",
    link: "/app/stocks",
    icon: <ShowChart />,
  },
  {
    id: 5,
    label: "CAPM",
    link: "/app/capm",
    icon: <BubbleChart />,
  },
  {
    id: 6,
    label: "Backtest",
    link: "/app/backtest",
    icon: <BarChart />,
  },
];

export default Structures;
