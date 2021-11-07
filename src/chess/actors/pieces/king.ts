import { Resources } from "../../../resources";
import { Team } from "../../models/team";
import { Board } from "../board";
import { Case } from "../case";
import { Piece } from "../piece";

export class King extends Piece {
  constructor(team: Team, initialPos: [number, number], boardRef: Board) {
    super(
      team,
      initialPos,
      boardRef,
      team === "White" ? Resources.king_white : Resources.king_black
    );
  }

  public highlightPossibleMove(): void {
    const casesToHighlight: Case[] = [];

    const x = this.currentCase.xPos;
    const y = this.currentCase.yPos;

    const upCase = y - 1 > -1 ? this.boardRef.cases[x][y - 1] : undefined;
    if (upCase && upCase.piece?.team !== this.team) {
      casesToHighlight.push(upCase);
    }

    const leftCase = x - 1 > -1 ? this.boardRef.cases[x - 1][y] : undefined;
    if (leftCase && leftCase.piece?.team !== this.team) {
      casesToHighlight.push(leftCase);
    }

    const rightCase = x + 1 < 8 ? this.boardRef.cases[x + 1][y] : undefined;
    if (rightCase && rightCase.piece?.team !== this.team) {
      casesToHighlight.push(rightCase);
    }

    const downCase = y + 1 < 8 ? this.boardRef.cases[x][y + 1] : undefined;
    if (downCase && downCase.piece?.team !== this.team) {
      casesToHighlight.push(downCase);
    }

    const upRightCase =
      y - 1 > -1 && x + 1 < 8 ? this.boardRef.cases[x + 1][y - 1] : undefined;
    if (upRightCase && upRightCase.piece?.team !== this.team) {
      casesToHighlight.push(upRightCase);
    }

    const upLeftCase =
      y - 1 > -1 && x - 1 > -1 ? this.boardRef.cases[x - 1][y - 1] : undefined;
    if (upLeftCase && upLeftCase.piece?.team !== this.team) {
      casesToHighlight.push(upLeftCase);
    }

    const downRightCase =
      y + 1 < 8 && x + 1 < 8 ? this.boardRef.cases[x + 1][y + 1] : undefined;
    if (downRightCase && downRightCase.piece?.team !== this.team) {
      casesToHighlight.push(downRightCase);
    }

    const downLeftCase =
      y + 1 < 8 && x - 1 > -1 ? this.boardRef.cases[x - 1][y + 1] : undefined;
    if (downLeftCase && downLeftCase.piece?.team !== this.team) {
      casesToHighlight.push(downLeftCase);
    }

    for (const caseToHighlight of casesToHighlight) {
      caseToHighlight.highlight();
    }
  }
}
