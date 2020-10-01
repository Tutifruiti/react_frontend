import React from "react";

import HomeIcon from "@material-ui/icons/Home";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import InfoIcon from "@material-ui/icons/Info";

import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import About from "../Pages/About";

// Declare all routes with attribute
// Routes are composed of:
// path : lien url
// name : le nom
// render : la page à render
// icon : l'icon associé
// exact boolean : un suivis exacte de l'url
const routes = [
  {
    path: "/",
    name: "home",
    render: () => <Home />,
    icon: () => <HomeIcon />,
    exact: true,
  },
  {
    path: "/contact",
    name: "contact",
    render: () => <Contact />,
    icon: () => <ContactSupportIcon />,
    exact: true,
  },
  {
    path: "/about",
    name: "about",
    render: () => <About />,
    icon: () => <InfoIcon />,
    exact: true,
  },
];

export default routes;
