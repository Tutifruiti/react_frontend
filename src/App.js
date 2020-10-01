import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'fontsource-roboto';

import Routes from "./components/Routes";

function App() {
  return (
    <>
      {
        // switch to the corresponding page
      }
      <Router>
        <Switch>
          {Routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.render />}
            />
          ))}
        </Switch>
      </Router>
    </>
  );
}

export default App;
