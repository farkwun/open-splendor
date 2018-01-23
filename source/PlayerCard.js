import React from 'react';

import Prestige from './Prestige';
import CardTray from './CardTray';
import NobleTray from './NobleTray';
import Wallet from './Wallet';

class PlayerCard extends React.Component {
  render() {
    return (
      <div className="player__card">
        <h1 className="player__name">{this.props.player.id}</h1>
        <Prestige prestige={this.props.player.prestige} />
        <CardTray cards={this.props.player.cards} />
        <NobleTray nobles={this.props.player.nobles} />
        <Wallet coins={this.props.player.coins} />
      </div>
    );
  }
}

export default PlayerCard;
