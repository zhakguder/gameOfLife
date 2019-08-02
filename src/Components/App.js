import React, { Component } from "react";
import Board from "./GameBoard";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Board />
      </div>
    );
  }
}

export default App;
