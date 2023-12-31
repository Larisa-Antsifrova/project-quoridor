import { Cell } from "./Cell"

export class Board {
  constructor(size, player1, player2) {
    this.size = size

    const board = new Array(size).fill(null)

    for(const i in board) {
      board[i] = new Array(size).fill(null).map((_el, j) => new Cell(i, j))
    }

    this.board = board
    
    this.initBorders()
    this.initPlayers(player1, player2)
  }

  getAvailableCells(player) {
    const playerCell = this.getPlayerCell(player)

    const availableDirections = this.directions.filter(direction => playerCell[direction.name] === 'open')

    return availableDirections
      .map(direction => this.board[playerCell.y + direction.shift.y][playerCell.x + direction.shift.x])
      .filter(cell => cell.player === null)
  }

  placeWall(_player, cell, direction) {
    if(cell[direction] === 'closed') {
      return false
    }

    if(this.isIntersecting(cell, direction)) {
      return false
    }

    const nextCell = direction === 'up' 
      ? this.board[cell.y][cell.x + 1]
      : this.board[cell.y + 1]?.[cell.x]

    if(nextCell === undefined || nextCell[direction] === 'closed') {
      return false
    }

    cell[direction] = 'closed'
    nextCell[direction] = 'closed'
    return true
  }

  movePlayer(player, newCell) {
    if(!this.getAvailableCells(player).includes(newCell)) {
      return false
    }
    const playerCell = this.getPlayerCell(player)
    playerCell.player = null
    newCell.player = player
    return true
  }

  initBorders() {
    this.board[0].forEach((cell) => cell.up = 'closed')
    this.board.at(-1).forEach((cell) => cell.down = 'closed')
    this.board.forEach(row => {
      row[0].left = 'closed'
      row.at(-1).right = 'closed'
    })
  }

  initPlayers(player1, player2) {
    this.board[player1.y][player1.x].player = player1.name
    this.board[player2.y][player2.x].player = player2.name
  }

  getPlayerCell(player) {
    const playerRow = this.board.find(row => row.find(cell => cell.player === player))

    return playerRow.find(cell => cell.player === player)
  }

  isIntersecting(cell, direction) {
    if(direction === 'up') {
      console.log(cell, this.board[cell.y - 1]?.[cell.x])
      return cell.right === 'closed' && this.board[cell.y - 1]?.[cell.x].right === 'closed'
    } else {
      console.log(cell, this.board[cell.y][cell.x + 1])
      return cell.down === 'closed' && this.board[cell.y][cell.x + 1].down === 'closed'
    }
  }

  directions = [
    {name: 'up', shift: {x: 0, y: -1}},
    {name: 'right', shift: {x: 1, y: 0}},
    {name: 'down', shift: {x: 0, y: 1}},
    {name: 'left', shift: {x: -1, y: 0}},
  ]
}
