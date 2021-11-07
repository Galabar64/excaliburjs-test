import { Resources } from "../../../resources";
import { Team } from "../../models/team";
import {
  checkUpLeftCases,
  checkUpRightCases,
  checkDownLeftCases,
  checkDownRightCases
} from "../../utils/move-utils";
import { Board } from "../board";
import { Case } from "../case";
import { Piece } from "../piece";

export class Bishop extends Piece {
  constructor(team: Team, initialPos: [number, number], boardRef: Board) {
    super(
      team,
      initialPos,
      boardRef,
      team === "White" ? Resources.bishop_white : Resources.bishop_black
    );
  }

  public highlightPossibleMove(): void {
    const casesToHighlight: Case[] = [];

    const x = this.currentCase.xPos;
    const y = this.currentCase.yPos;

    casesToHighlight.push(...checkUpLeftCases(this.boardRef, this, x, y));
    casesToHighlight.push(...checkUpRightCases(this.boardRef, this, x, y));
    casesToHighlight.push(...checkDownLeftCases(this.boardRef, this, x, y));
    casesToHighlight.push(...checkDownRightCases(this.boardRef, this, x, y));

    for (const caseToHighlight of casesToHighlight) {
      caseToHighlight.highlight();
    }
  }
}
