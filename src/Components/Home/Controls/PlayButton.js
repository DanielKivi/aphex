import React, { Component } from "react";

/**
 * Play button component
 */

class PlayButton extends Component {
  render() {
    return (
      <div className={"PlayButton"}>
        <button onClick={this.props.onClick}>
          {this.props.playing ? "Pause" : "Play"}
        </button>
      </div>
    );
  }
}

export default PlayButton;
