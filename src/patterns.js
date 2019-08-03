import _ from "lodash";

import { nCells, nRows, pattern } from "./config";

const liveCells = [];

switch (pattern) {
  case "10_cell_row":
    _.times(nRows / 10 + 1, rowIndex => {
      _.times(10, index => {
        liveCells.push(nCells * rowIndex * 10 + index + 2, true);
      });
    });

  case "glider":
    const verticalSize = 20;
    const horizontalSize = 20;
    _.times(nCells / verticalSize + 1, rowIndex => {
      _.times(nRows / verticalSize + 1, colIndex => {
        const rowLocation = rowIndex * nCells * verticalSize;
        const patternStart = colIndex * horizontalSize;
        liveCells.push(patternStart + rowLocation, true);
        liveCells.push(patternStart + nCells + rowLocation + 1, true);
        liveCells.push(patternStart + nCells * 2 + rowLocation + 1, true);
        liveCells.push(patternStart + nCells * 2 + rowLocation, true);
        liveCells.push(patternStart + nCells * 2 + rowLocation - 1, true);
      });
    });
}

export default liveCells;
