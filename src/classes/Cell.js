export class Cell {
  up = 'open'
  right = 'open'
  down = 'open'
  left = 'open'
  player = null

  constructor(y, x) {
    this.x = Number(x)
    this.y = Number(y)
  }
}