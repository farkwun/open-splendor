import React, { Component } from "react";

import GameBoard from "./GameBoard";

class App extends Component {
  render() {
    return (
      <div className="app">
        <GameBoard />
      </div>
    );
  }
}

export default App;
