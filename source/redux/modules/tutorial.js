import React from "react";

const PUSH_TUTORIAL = "push_tutorial";
const POP_TUTORIAL = "pop_tutorial";
const SHOW_TUTORIAL = "show_tutorial";
const HIDE_TUTORIAL = "hide_tutorial";
const RESET_TUTORIAL = "reset_tutorial";

const header = "Welcome to Splendor!";
const body = (
  <div>
    Welcome to Splendor. Splendor is a game of strategy in which you take coins,
    buy cards, and ultimately gain enough Prestige to win.
    <br />
    <br />
    Hover over elements for more information!
    <br />
    <br />
    Each turn, players will choose to either take coins or buy development
    cards. Taking tokens is done through the Stash and Coin Board. Taking a
    valid Stash ends your turn, so be sure to choose wisely!
    <br />
    <br />
    Once a player has enough coins to meet the costs displayed on a development
    card, they may instead use their turn to buy a card. Cards provide Prestige
    for yourself, remove possibilities from your opponents, and most
    importantly, provide discounts for all future purchases.
    <br />
    <br />
    Each card has a color identity displayed in the top right - this color
    identity represents the type of discount that card will provide. When
    purchasing a card, its costs will be discounted based on the numbers and
    types of cards already in your possession. In fact, if you have enough
    cards, you may find that some cards will become completely free!
    <br />
    <br />
    The game enters its end state when a player reaches 15 Prestige points. When
    this happens, the round completes, ensuring every player gets an equal
    number of turns. After the round is over, the player with the most Prestige
    wins! If there is a tie, the player who has the fewest development cards
    wins.
    <br />
    <br />
    We hope you enjoy playing Splendor.
  </div>
);

// Action creators
export const pushTutorial = tooltip => ({
  type: PUSH_TUTORIAL,
  tooltip
});

export const showTutorial = () => ({ type: SHOW_TUTORIAL });

export const hideTutorial = () => ({ type: HIDE_TUTORIAL });

export const popTutorial = () => ({ type: POP_TUTORIAL });

export default (
  state = { show: true, history: [{ header, body }] },
  action
) => {
  switch (action.type) {
    case PUSH_TUTORIAL:
      return {
        ...state,
        history: [...state.history, action.tooltip]
      };
    case SHOW_TUTORIAL:
      return {
        ...state,
        show: true
      };
    case HIDE_TUTORIAL:
      return {
        ...state,
        show: false
      };
    case POP_TUTORIAL:
      return {
        ...state,
        history:
          state.history.length > 1
            ? state.history.slice(0, -1)
            : [{ header, body }]
      };
    default:
      return state;
  }
};
