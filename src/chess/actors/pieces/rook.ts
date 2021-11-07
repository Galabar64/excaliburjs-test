import { Resources } from "../../../resources";
import { Team } from "../../models/team";
import {
  checkUpCases,
  checkDownCases,
  checkLeftCases,
  checkRightCases
} from "../../utils/move-utils";
import { Board } from "../board";
import { Case } from "../case";
import { Piece } from "../piece";

export class Rook extends Piece {
  constructor(team: Team, initialPos: [number, number], boardRef: Board) {
    super(
      team,
      initialPos,
      boardRef,
      team === "White" ? Resources.rook_white : Resources.rook_black
    );
  }

  public highlightPossibleMove(): void {
    const casesToHighlight: Case[] = [];

    const x = this.currentCase.xPos;
    const y = this.currentCase.yPos;

    casesToHighlight.push(...checkUpCases(this.boardRef, this, x, y));
    casesToHighlight.push(...checkDownCases(this.boardRef, this, x, y));
    casesToHighlight.push(...checkLeftCases(this.boardRef, this, x, y));
    casesToHighlight.push(...checkRightCases(this.boardRef, this, x, y));

    for (const caseToHighlight of casesToHighlight) {
      caseToHighlight.highlight();
    }
  }
}
