import { Cell } from "./Cell";
import { Direction } from "./Direction";

export class Snake {
  coordinates: Cell[] = [new Cell(2, 0), new Cell(1, 0), new Cell (0, 0)];
  length: number = 3;
  tail: Cell[] = this.coordinates;

  setDirection(direction: Direction) {
  }

  move() {
    this.coordinates.forEach(cell => cell.x++);
  }

  grow() {}

  getHead(): Cell {
    return this.coordinates[0];
  }

  isSnake(cell: Cell): boolean {
    return false;
  }

  getDirection(): Direction {
    return "Right";
  }

  getTail(): Cell[] {
    return this.coordinates;
  }

  setTail(): void {
    let newTail: Cell[] = [];
    for (let i = 1; i < this.length; i++) {
      newTail.push(new Cell(this.getHead().x - this.length, this.getHead().y));
    }
    this.tail = newTail;
  }

  connect(): void {
    let wholeSnake: Cell[] = [];
    wholeSnake.push(this.getHead());
    wholeSnake.push(...this.getTail());
    this.coordinates = wholeSnake;
  }
}
