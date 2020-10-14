import React from "react";

import {
  Home as HomeIcon,
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
