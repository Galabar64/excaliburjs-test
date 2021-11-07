import { Resources } from "../../../resources";
import { Team } from "../../models/team";
import { Board } from "../board";
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
    throw new Error("Method not implemented.");
  }
}
