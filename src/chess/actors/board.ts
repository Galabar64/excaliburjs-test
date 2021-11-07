import { Actor, Color, vec } from "excalibur";
import { Case } from "./case";
import { Piece } from "./piece";
import { Bishop } from "./pieces/bishop";
import { King } from "./pieces/king";
import { Knight } from "./pieces/knight";
import { Pawn } from "./pieces/pawn";
import { Queen } from "./pieces/queen";
import { Rook } from "./pieces/rook";

export class Board extends Actor {
  public cases: Case[][] = this.buildCases();
  public pieces: Piece[] = this.buildPieces();

  public resetTouched(): void {
    for (const piece of this.pieces) {
      piece.touched = false;
    }

    for (const casesX of this.cases) {
      for (const caseY of casesX) {
        caseY.resetHighlight();
      }
    }
  }

  public movePiece(toCase: Case) {
    const touchedPiece = this.pieces.find((piece) => piece.touched);
    touchedPiece?.move(toCase);
    this.resetTouched();
  }

  private buildCases(): Case[][] {
    const cases = new Array<Array<Case>>();

    for (let x = 0; x < 8; x++) {
      let colorCase = x % 2 === 0 ? Color.White : Color.Black;
      const row = new Array<Case>();
      for (let y = 0; y < 8; y++) {
        row.push(
          new Case(this, x, y, {
            pos: vec(50 * x + 25, 50 * y + 25),
            color: colorCase
          })
        );

        if (colorCase.equal(Color.White)) {
          colorCase = Color.Black;
        } else {
          colorCase = Color.White;
        }
      }
      cases.push(row);
    }

    return cases;
  }

  private buildPieces(): Piece[] {
    return [...this.buildWhitePieces(), ...this.buildBlackPieces()];
  }

  private buildWhitePieces(): Piece[] {
    return [
      new Pawn("White", [0, 6], this),
      new Pawn("White", [1, 6], this),
      new Pawn("White", [2, 6], this),
      new Pawn("White", [3, 6], this),
      new Pawn("White", [4, 6], this),
      new Pawn("White", [5, 6], this),
      new Pawn("White", [6, 6], this),
      new Pawn("White", [7, 6], this),

      new Rook("White", [0, 7], this),
      new Knight("White", [1, 7], this),
      new Bishop("White", [2, 7], this),
      new Queen("White", [3, 7], this),
      new King("White", [4, 7], this),
      new Bishop("White", [5, 7], this),
      new Knight("White", [6, 7], this),
      new Rook("White", [7, 7], this)
    ];
  }

  private buildBlackPieces(): Piece[] {
    return [
      new Pawn("Black", [0, 1], this),
      new Pawn("Black", [1, 1], this),
      new Pawn("Black", [2, 1], this),
      new Pawn("Black", [3, 1], this),
      new Pawn("Black", [4, 1], this),
      new Pawn("Black", [5, 1], this),
      new Pawn("Black", [6, 1], this),
      new Pawn("Black", [7, 1], this),

      new Rook("Black", [0, 0], this),
      new Knight("Black", [1, 0], this),
      new Bishop("Black", [2, 0], this),
      new Queen("Black", [3, 0], this),
      new King("Black", [4, 0], this),
      new Bishop("Black", [5, 0], this),
      new Knight("Black", [6, 0], this),
      new Rook("Black", [7, 0], this)
    ];
  }
}
