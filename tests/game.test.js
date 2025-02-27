// tests/game.test.js

import { initializeBoard } from "../src/game.js";

test("Initialize board correctly", () => {
  const board = initializeBoard();
  expect(board.length).toBe(8); // Board should have 8 rows
  expect(board[0].length).toBe(8); // Each row should have 8 columns
  expect(board[0][0]).toBe(null); // Initial cells should be null
});
