import React, { Component } from "react";

/**
 * Mute button component
 */

class MuteButton extends Component {
  render() {
    return (
      <div className={"MuteButton"}>
        <button onClick={this.props.onClick}>
          {this.props.mute ? "Unmute" : "Mute"}
        </button>
      </div>
    );
  }
}

export default MuteButton;
