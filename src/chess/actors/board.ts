import { Actor, Color, vec } from "excalibur";
import { Team } from "../models/team";
import { Case } from "./case";
import { Piece } from "./piece";
import { King } from "./pieces/king";

export class Board extends Actor {
  public cases: Case[][] = this.buildCases();
  public pieces: Piece[] = this.buildPieces();

  private buildCases(): Case[][] {
    const cases = new Array<Array<Case>>();

    for (let i = 0; i < 8; i++) {
      let colorCase = i % 2 === 0 ? Color.White : Color.Black;
      const row = new Array<Case>();
      for (let j = 0; j < 8; j++) {
        row.push(
          new Case({ pos: vec(50 * i + 25, 50 * j + 25), color: colorCase })
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
    return [new King(Team.White, [3, 7], this)];
  }
}
