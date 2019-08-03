import _ from "lodash";

import { nCells, nRows, pattern } from "./config";

const liveCells = [];

switch (pattern) {
  case "10 cell row":
    _.times(nRows / 10 + 1, rowIndex => {
      _.times(10, index => {
        liveCells.push(nCells * rowIndex * 10 + index + 2, true);
      });
    });
  case "glider":
    _.times(nRows / 10 + 1, rowIndex => {
      liveCells.push((rowIndex * 10 + 3) * nCells + nCells / 2, true);
      liveCells.push((rowIndex * 10 + 4) * nCells + nCells / 2 + 1, true);
      liveCells.push((rowIndex * 10 + 5) * nCells + nCells / 2 + 1, true);
      liveCells.push((rowIndex * 10 + 5) * nCells + nCells / 2, true);
      liveCells.push((rowIndex * 10 + 5) * nCells + nCells / 2 - 1, true);
    });
}

export default liveCells;
