import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import Cell from "./Cell";

class Board extends Component {
  state = { nCells: 10, nRows: 10 };

  getAllCells = () => {
    const allCells = [];
    _.times(this.state.nRows, index => {
      allCells.push(
        <div key={`row${index}`} className="ten column row">
          {" "}
          {this.getCells(index)}
        </div>
      );
    });
    return _.flatten(allCells);
  };
  getCells = startIndex => {
    const cells = [];
    _.times(this.state.nCells, index => {
      const thisIndex = startIndex * this.state.nCells + index;
      cells.push(
        <Cell
          key={`cell ${thisIndex}`}
          id={thisIndex}
          neighbors={this.getCellNeighbors(thisIndex)}
        />
      );
    });
    return cells;
  };

  getCellNeighbors = id => {
    const { nCells, nRows } = this.state;
    const neighborArray = [
      id - nCells - 1,
      id - nCells,
      id - nCells + 9,
      id - 1,
      id + 1,
      id + nCells - 1,
      id + nCells,
      id + nCells + 1
    ].filter(item => item > 0 && item < 99);
    if (id % 10 === 0) {
      return neighborArray.filter(
        item =>
          item !== id - nCells - 1 &&
          item !== id - 1 &&
          item !== id + nCells - 1
      );
    } else if (id % 10 === 9) {
      return neighborArray.filter(
        item =>
          item !== id - nCells + 1 &&
          item !== id + 1 &&
          item !== id + nCells + 1
      );
    } else {
      return neighborArray;
    }
  };
  render() {
    return (
      <div className="ui divided grid center aligned container">
        {this.getAllCells()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { lifeArray: state.game.lifeArray };
};

export default connect(
  mapStateToProps,
  {}
)(Board);
