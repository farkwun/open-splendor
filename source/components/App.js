import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Game from "./Game";
import Welcome from "./Welcome";
import Spinner from "./Spinner";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Spinner />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/game" component={Game} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
