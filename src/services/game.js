import { Cell } from "./Cell"

export const initBoard = (size = 9) => {
  const board = new Array(size).fill(null)

  for(const i in board) {
    board[i] = new Array(size).fill(null).map(() => new Cell())
  }

  initBorders(board)

  return board
}

const initBorders = (board) => {
  board[0].forEach((cell) => cell.up = 'closed')
  board.at(-1).forEach((cell) => cell.down = 'closed')
  board.forEach(row => {
    row[0].left = 'closed'
    row.at(-1).right = 'closed'
  })
}