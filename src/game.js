// src/game.js

export function initializeBoard() {
  const board = Array(8)
    .fill(null)
    .map(() => Array(8).fill(null));
  return board;
}
