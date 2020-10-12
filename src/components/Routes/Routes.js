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
  { id: 0,
    label: "Dashboard",
    link: "/app/dashboard",
    component: Dashboard,
    icon: <HomeIcon /> 
  },
  {
    id: 1,
    label: "Typography",
    link: "/app/typography",
    component: Typography,
    icon: <TypographyIcon />,
  },
  { id: 2,
    label: "Tables",
    link: "/app/tables",
    icon: <TableIcon /> },
  {
    id: 3,
    label: "Notifications",
    link: "/app/notifications",
    icon: <NotificationsIcon />,
  },
  {
    id: 4,
    label: "UI Elements",
    link: "/app/ui",
    icon: <UIElementsIcon />,
    children: [
      { label: "Icons", link: "/app/ui/icons" },
      { label: "Charts", link: "/app/ui/charts" },
      { label: "Maps", link: "/app/ui/maps" },
    ],
  },
  { id: 5, type: "divider" },
  { id: 6, type: "title", label: "HELP" },
  { id: 7, label: "Library", link: "", icon: <LibraryIcon /> },
  { id: 8, label: "Support", link: "", icon: <SupportIcon /> },
  { id: 9, label: "FAQ", link: "", icon: <FAQIcon /> },
  { id: 10, type: "divider" },
  { id: 11, type: "title", label: "PROJECTS" },
];

export default Routes;