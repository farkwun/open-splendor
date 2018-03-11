import { combineReducers } from "redux";

import me from "./modules/me";
import roomId from "./modules/roomid";
import active from "./modules/active";
import isLoading from "./modules/loading";
import toast from "./modules/toast";
import mode from "./modules/mode";
import nobleList from "./modules/nobleList";
import levels from "./modules/levels";
import coins from "./modules/coins";
import roundNum from "./modules/roundNum";
import stash from "./modules/stash";
import playOrder from "./modules/playOrder";
import playIndex from "./modules/playIndex";
import players from "./modules/players";
import winner from "./modules/winner";

export default combineReducers({
  me,
  roomId,
  active,
  isLoading,
  toast,
  mode,
  nobleList,
  levels,
  coins,
  roundNum,
  stash,
  playOrder,
  playIndex,
  players,
  winner
});
