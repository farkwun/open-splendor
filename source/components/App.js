import React, { Component } from "react";

import Welcome from "./Welcome";
import Spinner from "./Spinner";
import Toast from "./Toast";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Spinner />
        <Toast />
        <Welcome />
      </div>
    );
  }
}

export default App;
