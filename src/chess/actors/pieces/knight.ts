import { Resources } from "../../../resources";
import { Team } from "../../models/team";
import { Board } from "../board";
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
    throw new Error("Method not implemented.");
  }
}
