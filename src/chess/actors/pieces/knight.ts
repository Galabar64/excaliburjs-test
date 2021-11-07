import { Resources } from "../../../resources";
import { Team } from "../../models/team";
import { Board } from "../board";
import { Case } from "../case";
import { Piece } from "../piece";

export class Knight extends Piece {
  constructor(team: Team, initialPos: [number, number], boardRef: Board) {
    super(
      team,
      initialPos,
      boardRef,
      team === "White" ? Resources.knight_white : Resources.knight_black
    );
  }

  public highlightPossibleMove(): void {
    const casesToHighlight: Case[] = [];

    const x = this.currentCase.xPos;
    const y = this.currentCase.yPos;

    const upRightCase1 =
      x + 1 < 8 && y - 2 > -1 ? this.boardRef.cases[x + 1][y - 2] : undefined;
    if (upRightCase1 && upRightCase1.piece?.team !== this.team) {
      casesToHighlight.push(upRightCase1);
    }

    const upRightCase2 =
      x + 2 < 8 && y - 1 > -1 ? this.boardRef.cases[x + 2][y - 1] : undefined;
    if (upRightCase2 && upRightCase2.piece?.team !== this.team) {
      casesToHighlight.push(upRightCase2);
    }

    const upLeftCase1 =
      x - 1 > -1 && y - 2 > -1 ? this.boardRef.cases[x - 1][y - 2] : undefined;
    if (upLeftCase1 && upLeftCase1.piece?.team !== this.team) {
      casesToHighlight.push(upLeftCase1);
    }

    const upLeftCase2 =
      x - 2 > -1 && y - 1 > -1 ? this.boardRef.cases[x - 2][y - 1] : undefined;
    if (upLeftCase2 && upLeftCase2.piece?.team !== this.team) {
      casesToHighlight.push(upLeftCase2);
    }

    const downRightCase1 =
      x + 1 < 8 && y + 2 < 8 ? this.boardRef.cases[x + 1][y + 2] : undefined;
    if (downRightCase1 && downRightCase1.piece?.team !== this.team) {
      casesToHighlight.push(downRightCase1);
    }

    const downRightCase2 =
      x + 2 < 8 && y + 1 < 8 ? this.boardRef.cases[x + 2][y + 1] : undefined;
    if (downRightCase2 && downRightCase2.piece?.team !== this.team) {
      casesToHighlight.push(downRightCase2);
    }

    const downLeftCase1 =
      x - 1 > -1 && y + 2 < 8 ? this.boardRef.cases[x - 1][y + 2] : undefined;
    if (downLeftCase1 && downLeftCase1.piece?.team !== this.team) {
      casesToHighlight.push(downLeftCase1);
    }

    const downLeftCase2 =
      x - 2 > -1 && y + 1 < 8 ? this.boardRef.cases[x - 2][y + 1] : undefined;
    if (downLeftCase2 && downLeftCase2.piece?.team !== this.team) {
      casesToHighlight.push(downLeftCase2);
    }

    for (const caseToHighlight of casesToHighlight) {
      caseToHighlight.highlight();
    }
  }
}
