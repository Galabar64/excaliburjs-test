import { Resources } from "../../../resources";
import { Team } from "../../models/team";
import { Board } from "../board";
import { Case } from "../case";
import { Piece } from "../piece";

export class Pawn extends Piece {
  private firstMove = true;

  constructor(team: Team, initialPos: [number, number], boardRef: Board) {
    super(
      team,
      initialPos,
      boardRef,
      team === "White" ? Resources.pawn_white : Resources.pawn_black
    );
  }

  public move(moveToCase: Case): void {
    super.move(moveToCase);
    this.firstMove = false;
  }

  public highlightPossibleMove(): void {
    const casesToHighlight: Case[] = [];

    const x = this.currentCase.xPos;
    const y = this.currentCase.yPos;

    switch (this.team) {
      case "White":
        casesToHighlight.push(...this.highlightWhite(y, x));
        break;
      case "Black":
        casesToHighlight.push(...this.highlightBlack(y, x));
        break;
    }

    for (const caseToHighlight of casesToHighlight) {
      caseToHighlight.highlight();
    }
  }

  private highlightWhite(y: number, x: number): Case[] {
    const casesToHighlight: Case[] = [];

    const upCase = y - 1 > -1 ? this.boardRef.cases[x][y - 1] : undefined;
    if (upCase && !upCase.piece) {
      casesToHighlight.push(upCase);
    }

    const upRightCase =
      y - 1 > -1 && x + 1 < 8 ? this.boardRef.cases[x + 1][y - 1] : undefined;
    if (
      upRightCase &&
      upRightCase.piece &&
      upRightCase.piece.team === "Black"
    ) {
      casesToHighlight.push(upRightCase);
    }

    const upLeftCase =
      y - 1 > -1 && x - 1 > 1 ? this.boardRef.cases[x - 1][y - 1] : undefined;
    if (upLeftCase && upLeftCase.piece && upLeftCase.piece.team === "Black") {
      casesToHighlight.push(upLeftCase);
    }

    if (this.firstMove && !upCase?.piece) {
      const secondUpCase =
        y - 2 > -1 ? this.boardRef.cases[x][y - 2] : undefined;
      if (secondUpCase && !secondUpCase.piece) {
        casesToHighlight.push(secondUpCase);
      }
    }

    return casesToHighlight;
  }

  private highlightBlack(y: number, x: number): Case[] {
    const casesToHighlight: Case[] = [];

    const downCase = y + 1 < 8 ? this.boardRef.cases[x][y + 1] : undefined;
    if (downCase && !downCase.piece) {
      casesToHighlight.push(downCase);
    }

    const downRightCase =
      y + 1 < 8 && x + 1 < 8 ? this.boardRef.cases[x + 1][y + 1] : undefined;
    if (
      downRightCase &&
      downRightCase.piece &&
      downRightCase.piece.team === "White"
    ) {
      casesToHighlight.push(downRightCase);
    }

    const downLeftCase =
      y + 1 < 8 && x - 1 > 1 ? this.boardRef.cases[x - 1][y + 1] : undefined;
    if (
      downLeftCase &&
      downLeftCase.piece &&
      downLeftCase.piece.team === "White"
    ) {
      casesToHighlight.push(downLeftCase);
    }

    if (this.firstMove && !downCase?.piece) {
      const secondDownCase =
        y + 2 < 8 ? this.boardRef.cases[x][y + 2] : undefined;
      if (secondDownCase && !secondDownCase.piece) {
        casesToHighlight.push(secondDownCase);
      }
    }

    return casesToHighlight;
  }
}
