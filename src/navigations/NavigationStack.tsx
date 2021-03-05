import { createElement, useMemo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NAVIGATION_MAP } from "./NavigationMap";

export default function NavigationStack() {
  const routes = useMemo(
    () =>
      Object.entries(NAVIGATION_MAP).map(([route, value]) => (
        <Route key={route} path={value.path}>
          {createElement(value.component)}
        </Route>
      )),
    []
  );

  return (
    <Router>
      <Switch>{routes}</Switch>
    </Router>
  );
}
