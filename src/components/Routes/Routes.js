import React from "react";

import {
  Home as HomeIcon,
  NotificationsNone as NotificationsIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";

// Pages
import Dashboard from "../../pages/dashboard/Dashboard";
import Typography from "../../pages/typography/Typography";

// Declare all routes with attribute
// Routes are composed of:
// id
// label
// link
// component
// icon
const Routes = [
  { id: 0, type: "title", label: "MENU" },
  { id: 1, type: "divider" },
  {
    id: 2,
    label: "Dashboard",
    link: "/app/dashboard",
    component: Dashboard,
    icon: <HomeIcon />,
  },
  {
    id: 3,
    label: "Typography",
    link: "/app/typography",
    component: Typography,
    icon: <TypographyIcon />,
  },
];

export default Routes;
