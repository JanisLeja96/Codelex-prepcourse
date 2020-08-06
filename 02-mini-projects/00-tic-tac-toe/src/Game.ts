export type XO = "X" | "O" | "-";

export class Game {
  currentCells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
  currentTurn: XO = 'X';

  static winningCombinations: number[][] = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  getCells(): XO[] {
    return this.currentCells;
  }

  getCellsPerPlayer() {
    let cellsPerPlayer = {
      'X': Array<number>(),
      'O': Array<number>()
    }

    this.currentCells.forEach((cell: XO, index: number) => {
      if (cell == 'X') cellsPerPlayer['X'].push(index);
      else if (cell == 'O') cellsPerPlayer['O'].push(index);
    });
    return cellsPerPlayer;
  }

  getTurn(): XO {
    return this.currentTurn;
  }

  getWinner(): XO {
    let winner: XO = '-';
    Game.winningCombinations.forEach(combo => {
      if (combo.every(cell => this.getCellsPerPlayer()['X'].includes(cell))) winner = 'X';
      else if (combo.every(cell => this.getCellsPerPlayer()['O'].includes(cell))) winner = 'O';
    });
    return winner;
  }

  isOver(): boolean {
    if (this.getWinner() == 'X' || this.getWinner() == 'O' || this.currentCells.every(cell => cell != '-')) return true;
    return false;
  }

  isTie(): boolean {
    if (this.getWinner() != 'X' && this.getWinner() != 'O' && this.isOver()) return true;
    else return false;
  }

  onClick(i: number): void {
    console.log(`cell ${i} clicked`);
    if (this.getCells()[i] == '-' && !this.isOver()) {
    this.getCells()[i] = this.getTurn();
    this.switchTurn();
    }
  }

  restart(): void {
    console.log("restart called");
    this.currentCells = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
  }

  switchTurn(): void {
    if (this.currentTurn == 'X') this.currentTurn = 'O';
    else this.currentTurn = 'X';
  }
}
