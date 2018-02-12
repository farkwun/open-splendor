import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import * as mock from "./helpers/MockData";
import App from "./components/App";

function reducer(state, action) {
  return {
    nobleList: mock.nobleList,
    nobles: mock.nobles,
    levels: mock.levels,
    cards: mock.cards,
    coins: mock.coins,
    roundNum: mock.roundNum,
    stash: [],
    playOrder: mock.playOrder,
    playIndex: mock.playIndex,
    players: mock.players
  };
}

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
