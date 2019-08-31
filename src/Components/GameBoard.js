import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import Cell from "./Cell";
import { nCells, nRows, timerInterval } from "../config";
import { sendLive, sendAllLives } from "../actions";
import liveCells from "../patterns";
import { Stage, Layer } from "react-konva";

class Board extends Component {
  state = { nCells: nCells, nRows: nRows };
  componentDidMount() {
    console.log(timerInterval);
    const { nCells, nRows } = this.state;
    liveCells.map(cell => {
      this.props.sendLive(cell, true);
    });
    this.timerID = setInterval(() => this.getNextLives(), timerInterval);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getAllCells = () => {
    const allCells = [];
    _.times(this.state.nRows, index => {
      allCells.push(
        //<div key={`row${index}`} className={`${this.state.nCells} column row`}>
        <>{this.getCells(index)}</>
        //</div>
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
          key={`cell ${index}`}
          id={thisIndex}
          x={index * 10}
          y={startIndex * 10}
          isAlive={this.props.lifeArray[thisIndex]}
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
      id - nCells + 1,
      id - 1,
      id + 1,
      id + nCells - 1,
      id + nCells,
      id + nCells + 1
    ].filter(item => item > 0 && item < nCells * nRows - 2);
    const result = neighborArray;
    if (id % nCells === 0) {
      const result = neighborArray.filter(
        item =>
          item !== id - nCells - 1 &&
          item !== id - 1 &&
          item !== id + nCells - 1
      );
    } else if (id % nCells === 9) {
      const result = neighborArray.filter(
        item =>
          item !== id - nCells + 1 &&
          item !== id + 1 &&
          item !== id + nCells + 1
      );
    }
    return result;
  };

  getnLiveNeighbors = id => {
    const lifeArray = [...this.props.lifeArray];
    const neighbors = this.getCellNeighbors(id);
    const aliveNeighbors = [];
    neighbors.map(neighbor => {
      aliveNeighbors.push(lifeArray[neighbor]);
    });
    const nAliveNeighbors = aliveNeighbors.filter(x => x).length;
    return nAliveNeighbors;
  };

  liveOrDie = (isAlive, nAliveNeighbors) => {
    if (!isAlive) {
      if (nAliveNeighbors === 3) {
        return true;
      } else {
        return false;
      }
    } else if (isAlive) {
      if (nAliveNeighbors < 2 || nAliveNeighbors > 3) {
        return false;
      } else {
        return true;
      }
    }
  };

  getNextLives = () => {
    const newLifeArray = [];
    const { nRows, nCells } = this.state;
    _.times(nRows * nCells, index => {
      const isAlive = this.props.lifeArray[index];
      const nAliveNeighbors = this.getnLiveNeighbors(index);
      newLifeArray.push(this.liveOrDie(isAlive, nAliveNeighbors));
    });
    this.props.sendAllLives(newLifeArray);
  };

  render() {
    return (
      <Stage width={this.state.nCells * 10} height={this.state.nRows * 10}>
        <Layer>{this.getAllCells()}</Layer>
      </Stage>
      /*
      <div className="ui divided grid center aligned container">
        {this.getAllCells()}
      </div>*/
    );
  }
}

const mapStateToProps = state => {
  return { lifeArray: state.game.lifeArray };
};

export default connect(
  mapStateToProps,
  { sendAllLives, sendLive }
)(Board);
