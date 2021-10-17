import { Resources } from "../../../resources";
import { Team } from "../../models/team";
import { Board } from "../board";
import { Piece } from "../piece";

export class King extends Piece {
  constructor(team: Team, initialPos: [number, number], boardRef: Board) {
    super(team, initialPos, boardRef, Resources.king_black);
  }

  public highlightPossibleMove(): void {
    throw new Error("Method not implemented.");
  }
  public validateMove(): boolean {
    throw new Error("Method not implemented.");
  }
}
