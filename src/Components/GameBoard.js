import React, { Component } from "react";
import _ from "lodash";

import Cell from "./Cell";

class Board extends Component {
  state = { nCells: 10, nRows: 10 };

  getAllCells = () => {
    const allCells = [];
    _.times(this.state.nRows, () => {
      allCells.push(<div className="ten column row"> {this.getCells()}</div>);
    });
    console.log(allCells);
    return _.flatten(allCells);
  };
  getCells = () => {
    const cells = [];
    _.times(this.state.nCells, () => cells.push(<Cell />));
    return cells;
  };
  render() {
    return (
      <div className="ui divided grid center aligned container">
        {this.getAllCells()}
      </div>
    );
  }
}

export default Board;
