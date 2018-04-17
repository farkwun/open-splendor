import React, { Component } from "react";

class NewGameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  changeValue = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className="new__game__form centered">
        <div className="form__input">
          <input
            type="text"
            placeholder="Enter desired username"
            value={this.state.value}
            onChange={this.changeValue}
            maxLength="10"
          />
        </div>
        <div>
          <button
            className="button"
            disabled={!this.state.value}
            onClick={this.props.submit(this.state.value)}
          >
            Create
          </button>
          <button className="button" onClick={this.props.back}>
            Back
          </button>
        </div>
      </div>
    );
  }
}

export default NewGameForm;
