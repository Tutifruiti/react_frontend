import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Typography } from "@material-ui/core";
import {Switch, Route } from "react-router-dom";

import Drawer from "./Drawer";
import Routes from "./Routes";

import Hero from "../Views/Hero"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'grey'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
}));

export default function MiniDrawer({
  open,
  handleDrawerOpen,
  handleDrawerClose,
  hasHero,
}) {

  const classes = useStyles();

  function position () {
    if (hasHero){
      return "absolute"
    } else {
      return "fixed"
    }
  }

  return (
    <>
      <AppBar
        position={position()}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Switch>
              {Routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<Typography variant="h6">{route.name}</Typography>}
                />
              ))}
          </Switch>
        </Toolbar>
        {hasHero
          ?<Hero />
          : <></>
        }
      </AppBar>
      <Drawer open={open} handleDrawerClose={handleDrawerClose} />
    </>
  );
}
