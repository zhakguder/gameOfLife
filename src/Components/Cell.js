import React, { Component } from "react";
import { sendLive } from "../actions";
import { connect } from "react-redux";

class Cell extends Component {
  // if nLiveNeighbors ==2 and cell live, keep live,
  // if nLiveNeigbors ==3 and cell dead, birth

  getColor = () => {
    return this.props.isAlive ? "green" : "blue";
  };

  onClick = () => {
    console.log(this.props.id);
    console.log(this.props.neighbors);
    //this.setState({ isLive: !this.state.isLive });
    //
    this.props.sendLive(this.props.id);
  };

  render() {
    return (
      <div className={`${this.getColor()} column`} onClick={this.onClick}></div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // get from the gameboard array the neighbor situation
  return { isAlive: state.game.lifeArray[ownProps.id], nAliveNeighbors: null };
};

export default connect(
  mapStateToProps,
  { sendLive }
)(Cell);
