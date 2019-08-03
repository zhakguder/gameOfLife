import React, { Component } from "react";
import { sendLive } from "../actions";
import { connect } from "react-redux";

import { Rect } from "react-konva";

class Cell extends Component {
  getColor = () => {
    return this.props.isAlive ? "orange" : "blue";
  };

  onClick = () => {
    return;
    //    this.props.sendLive(this.props.id);
  };

  render() {
    return (
      <Rect
        x={this.props.x}
        y={this.props.y}
        width={10}
        height={10}
        fill={this.getColor()}
        onClick={this.onClick}
      />
      //<div className={`${this.getColor()} column`} onClick={this.onClick}></div>
    );
  }
}

export default Cell;
/*
const mapStateToProps = (state, ownProps) => {
  // get from the gameboard array the neighbor situation
  return { isAlive: state.game.lifeArray[ownProps.id] };
};


connect(
  mapStateToProps,
  { sendLive }
)(Cell);
*/
