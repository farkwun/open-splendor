import { combineReducers } from "redux";

import isLoading from "./modules/loading";
import welcome from "./modules/welcome";
import nobleList from "./modules/nobleList";
import levels from "./modules/levels";
import coins from "./modules/coins";
import roundNum from "./modules/roundNum";
import stash from "./modules/stash";
import playOrder from "./modules/playOrder";
import playIndex from "./modules/playIndex";
import players from "./modules/players";

export default combineReducers({
  isLoading,
  welcome,
  nobleList,
  levels,
  coins,
  roundNum,
  stash,
  playOrder,
  playIndex,
  players
});
