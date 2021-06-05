import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Router() {
  return (
    <Router>
      <Switch>
        <Route path="/history">
          <History />
        </Route>
      </Switch>
    </Router>
  );
}

export default Router;
