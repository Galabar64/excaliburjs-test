import { Resources } from "../../../resources";
import { Team } from "../../models/team";
import { Board } from "../board";
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
    console.error("Method not implemented.");
  }
}
