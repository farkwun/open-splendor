import { combineReducers } from "redux";

import roomId from "./modules/roomid";
import active from "./modules/active";
import isLoading from "./modules/loading";
import showToast from "./modules/showToast";
import toastText from "./modules/toastText";
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
  roomId,
  active,
  isLoading,
  showToast,
  toastText,
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
