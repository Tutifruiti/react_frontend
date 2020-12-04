import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
  BrowserRouter,
} from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";
import Routes from "../Routes/Routes";

// context
import { useLayoutState } from "../../context/LayoutContext";
import StickyFooter from "../Footer/Footer";

// Pages
import Overview from "../../pages/overview/overview";
import Stocks from "../../pages/stocks";
import Backtest from "../../pages/backtest";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <Switch>
            {Routes.map((link) => (
              <Route
                key={link.id}
                path={link.link}
                component={link.component}
              />
            ))}
          </Switch>
          <StickyFooter />
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
