import { Board } from "../actors/board";
import { Case } from "../actors/case";
import { Piece } from "../actors/piece";

export function checkUpCases(
  board: Board,
  currentPiece: Piece,
  x: number,
  y: number
): Case[] {
  const availableCases: Case[] = [];

  for (let yi = y; yi > 0; yi--) {
    const upCase = board.cases[x][yi - 1];
    if (upCase && upCase.piece?.team !== currentPiece.team) {
      availableCases.push(upCase);
    }

    if (upCase.piece) {
      return availableCases;
    }
  }

  return availableCases;
}

export function checkDownCases(
  board: Board,
  currentPiece: Piece,
  x: number,
  y: number
): Case[] {
  const availableCases: Case[] = [];

  for (let yi = y; yi < 7; yi++) {
    const downCase = board.cases[x][yi + 1];
    if (downCase && downCase.piece?.team !== currentPiece.team) {
      availableCases.push(downCase);
    }

    if (downCase.piece) {
      return availableCases;
    }
  }

  return availableCases;
}

export function checkLeftCases(
  board: Board,
  currentPiece: Piece,
  x: number,
  y: number
): Case[] {
  const availableCases: Case[] = [];

  for (let xi = x; xi > 0; xi--) {
    const leftCase = board.cases[xi - 1][y];
    if (leftCase && leftCase.piece?.team !== currentPiece.team) {
      availableCases.push(leftCase);
    }

    if (leftCase.piece) {
      return availableCases;
    }
  }

  return availableCases;
}

export function checkRightCases(
  board: Board,
  currentPiece: Piece,
  x: number,
  y: number
): Case[] {
  const availableCases: Case[] = [];

  for (let xi = x; xi < 7; xi++) {
    const rightCase = board.cases[xi + 1][y];
    if (rightCase && rightCase.piece?.team !== currentPiece.team) {
      availableCases.push(rightCase);
    }

    if (rightCase.piece) {
      return availableCases;
    }
  }

  return availableCases;
}

export function checkUpLeftCases(
  board: Board,
  currentPiece: Piece,
  x: number,
  y: number
): Case[] {
  const availableCases: Case[] = [];

  for (let xi = x, yj = y; xi > 0 && yj > 0; xi--, yj--) {
    const upLeftCase = board.cases[xi - 1][yj - 1];
    if (upLeftCase && upLeftCase.piece?.team !== currentPiece.team) {
      availableCases.push(upLeftCase);
    }

    if (upLeftCase.piece) {
      return availableCases;
    }
  }

  return availableCases;
}

export function checkUpRightCases(
  board: Board,
  currentPiece: Piece,
  x: number,
  y: number
): Case[] {
  const availableCases: Case[] = [];

  for (let xi = x, yj = y; xi < 7 && yj > 0; xi++, yj--) {
    const upRightCase = board.cases[xi + 1][yj - 1];
    if (upRightCase && upRightCase.piece?.team !== currentPiece.team) {
      availableCases.push(upRightCase);
    }

    if (upRightCase.piece) {
      return availableCases;
    }
  }

  return availableCases;
}

export function checkDownLeftCases(
  board: Board,
  currentPiece: Piece,
  x: number,
  y: number
): Case[] {
  const availableCases: Case[] = [];

  for (let xi = x, yj = y; xi > 0 && yj < 7; xi--, yj++) {
    const downLeftCase = board.cases[xi - 1][yj + 1];
    if (downLeftCase && downLeftCase.piece?.team !== currentPiece.team) {
      availableCases.push(downLeftCase);
    }

    if (downLeftCase.piece) {
      return availableCases;
    }
  }

  return availableCases;
}

export function checkDownRightCases(
  board: Board,
  currentPiece: Piece,
  x: number,
  y: number
): Case[] {
  const availableCases: Case[] = [];

  for (let xi = x, yj = y; xi < 7 && yj < 7; xi++, yj++) {
    const downRightCase = board.cases[xi + 1][yj + 1];
    if (downRightCase && downRightCase.piece?.team !== currentPiece.team) {
      availableCases.push(downRightCase);
    }

    if (downRightCase.piece) {
      return availableCases;
    }
  }

  return availableCases;
}
