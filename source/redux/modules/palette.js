import { TYPE } from "../../data/static.js";

const SET_PALETTE = "set_palette";

// Palettes
export const DEFAULT_PALETTE = "default_palette";
export const COLORBLIND_PALETTE = "colorblind_palette";

const PALETTE = {
  [DEFAULT_PALETTE]: {
    [TYPE.ONYX]: "black",
    [TYPE.DIAMOND]: "white",
    [TYPE.SAPPHIRE]: "blue",
    [TYPE.EMERALD]: "green",
    [TYPE.RUBY]: "red",
    [TYPE.GOLD]: "yellow"
  },
  [COLORBLIND_PALETTE]: {
    [TYPE.ONYX]: "black",
    [TYPE.DIAMOND]: "white",
    [TYPE.SAPPHIRE]: "blue",
    [TYPE.EMERALD]: "green",
    [TYPE.RUBY]: "lightsalmon",
    [TYPE.GOLD]: "yellow"
  }
};

// Action creators
export const setPalette = palette => ({
  type: SET_PALETTE,
  palette
});

export default (
  state = { type: DEFAULT_PALETTE, colors: PALETTE[DEFAULT_PALETTE] },
  action
) => {
  switch (action.type) {
    case SET_PALETTE:
      return { type: action.palette, colors: PALETTE[action.palette] };
    default:
      return state;
  }
};
