import React from 'react';

class Deck extends React.Component {
  render() {
    console.log(this.props.id);
    return (
      <div className="deck">
        {this.props.id}
      </div>
    );
  }
}

export default Deck;
