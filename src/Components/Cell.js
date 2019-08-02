import React, { Component } from "react";

class Cell extends Component {
  state = { isLive: false, nLiveNeigbors: 10 };

  // if nLiveNeighbors ==2 and cell live, keep live,
  // if nLiveNeigbors ==3 and cell dead, birth

  getColor = () => {
    return this.state.isLive ? "green" : "blue";
  };
  render() {
    return <div className={`${this.getColor()} column`}>Cell</div>;
  }
}

export default Cell;

const mapStateToProps = (state, ownProps) => {
  // get from the gameboard array the neighbor situation
  return;
};
