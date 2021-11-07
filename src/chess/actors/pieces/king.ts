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
    if (upCase) {
      casesToHighlight.push(upCase);
    }

    const leftCase = x - 1 > -1 ? this.boardRef.cases[x - 1][y] : undefined;
    if (leftCase) {
      casesToHighlight.push(leftCase);
    }

    const rightCase = x + 1 < 8 ? this.boardRef.cases[x + 1][y] : undefined;
    if (rightCase) {
      casesToHighlight.push(rightCase);
    }

    const downCase = y + 1 < 8 ? this.boardRef.cases[x][y + 1] : undefined;
    if (downCase) {
      casesToHighlight.push(downCase);
    }

    for (const caseToHighlight of casesToHighlight) {
      caseToHighlight.highlight();
    }
  }
}
