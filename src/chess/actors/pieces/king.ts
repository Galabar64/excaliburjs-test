import { Resources } from "../../../resources";
import { Team } from "../../models/team";
import { Board } from "../board";
import { Case } from "../case";
import { Piece } from "../piece";

export class King extends Piece {
  constructor(team: Team, initialPos: [number, number], boardRef: Board) {
    super(team, initialPos, boardRef, Resources.king_black);
  }

  public highlightPossibleMove(): void {
    const casesToHighlight: Case[] = [];

    const x = this.currentPos[0];
    const y = this.currentPos[1];

    const currentCase = this.boardRef.cases[x][y];
    if (currentCase) {
      casesToHighlight.push(currentCase);
    }

    const upCase = this.boardRef.cases[x][y - 1];
    if (upCase) {
      casesToHighlight.push(upCase);
    }

    const leftCase = this.boardRef.cases[x - 1][y];
    if (leftCase) {
      casesToHighlight.push(leftCase);
    }

    const rightCase = this.boardRef.cases[x + 1][y];
    if (rightCase) {
      casesToHighlight.push(rightCase);
    }

    const downCase = this.boardRef.cases[x][y + 1];
    if (downCase) {
      casesToHighlight.push(downCase);
    }

    for (const caseToHighlight of casesToHighlight) {
      caseToHighlight.highlight();
    }
  }

  public validateMove(): boolean {
    throw new Error("Method not implemented.");
  }
}
