import { Resources } from "../../../resources";
import { Team } from "../../models/team";
import {
  checkDownCases,
  checkDownLeftCases,
  checkDownRightCases,
  checkLeftCases,
  checkRightCases,
  checkUpCases,
  checkUpLeftCases,
  checkUpRightCases
} from "../../utils/move-utils";
import { Board } from "../board";
import { Case } from "../case";
import { Piece } from "../piece";

export class Queen extends Piece {
  constructor(team: Team, initialPos: [number, number], boardRef: Board) {
    super(
      team,
      initialPos,
      boardRef,
      team === "White" ? Resources.queen_white : Resources.queen_black
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

    casesToHighlight.push(...checkUpLeftCases(this.boardRef, this, x, y));
    casesToHighlight.push(...checkUpRightCases(this.boardRef, this, x, y));
    casesToHighlight.push(...checkDownLeftCases(this.boardRef, this, x, y));
    casesToHighlight.push(...checkDownRightCases(this.boardRef, this, x, y));

    for (const caseToHighlight of casesToHighlight) {
      caseToHighlight.highlight();
    }
  }
}
