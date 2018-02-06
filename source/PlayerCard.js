import React from "react";

import Prestige from "./Prestige";
import CardTray from "./CardTray";
import NobleTray from "./NobleTray";
import Wallet from "./Wallet";
import * as helpers from "./Helpers";

class PlayerCard extends React.Component {
  render() {
    const net_prestige =
      this.props.player.prestige +
      helpers.getPrestigeFor(this.props.player.cards) +
      helpers.getPrestigeFor(this.props.player.nobles);

    return (
      <div className="player__card">
        <Prestige prestige={net_prestige} />
        <h1 className="player__name">{this.props.player.id}</h1>
        <CardTray cards={this.props.player.cards} />
        <NobleTray nobles={this.props.player.nobles} />
        <Wallet coins={this.props.player.coins} />
      </div>
    );
  }
}

export default PlayerCard;
