import { Actor, Color, vec } from "excalibur";
import { Team } from "../models/team";
import { Case } from "./case";
import { Piece } from "./piece";
import { King } from "./pieces/king";

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
            color: colorCase,
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
    return [new King(Team.White, [3, 5], this)];
  }
}
