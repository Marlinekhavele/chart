import React from "react";
import Graph from "./pages/Graph";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Graph} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;