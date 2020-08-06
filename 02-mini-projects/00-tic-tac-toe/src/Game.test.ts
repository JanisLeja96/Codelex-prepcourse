import { Game } from "./Game";

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });
  it("clicking on cells should work(cell 0 in this case)", () => {
    const game = new Game();
    game.onClick(0);

    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
  });

  it("should switch turns", () => {
    const game = new Game();
    game.onClick(0);
    expect(game.getTurn()).toBe("O");
  });

  it("symbol should change based on turns", () => {
    const game = new Game();
    game.onClick(0);
    game.onClick(1);

    expect(game.currentCells[1]).toBe("O");
  });

  it("should not be able to click on occupied cells", () => {
    const game = new Game();
    game.currentCells = ['X', '-', '-', '-', '-', '-', '-', '-', '-'];
    game.switchTurn();
    game.onClick(0);
    expect(game.getCells()[0]).toBe('X');
  });

  it("should end when all cells are taken", () => {
    const game = new Game();
    let i: number = 0;

    while (i < 9) {
      game.onClick(i);
      i++;
    }

    expect(game.isOver()).toBe(true);
  });

  it("should be able to determine a winner", () => {
    const game = new Game();
    game.currentCells = ['X', 'X', 'X', '-', '-', '-', '-', '-', '-'];
    expect(game.getWinner()).toBe('X');
  });
  
  it("should end when there's a winner", () => {
    const game = new Game();
    game.currentCells = ['X', 'X', 'X', '-', '-', '-', '-', '-', '-'];
    game.switchTurn();
    game.onClick(0);
    expect(game.getCells()[0]).toBe('X');
  });

  it("should should end when there's a tie", () => {
    const game = new Game();
    game.currentCells = ['X', 'O', 'O',
                         'O', 'X', 'X', 
                         'O', 'X', 'O'];
    game.onClick(0);
    expect(game.getCells()[0]).toBe('X');
  });

  it("restart should clear all cells", () => {
    const game = new Game();
    game.currentCells = ['X', 'X', 'X', '-', '-', '-', '-', '-', '-'];
    game.restart();
    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
  });
});
