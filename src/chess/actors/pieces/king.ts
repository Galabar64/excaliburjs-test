import { Color } from "excalibur";
import { Team } from "../../models/team";
import { Piece } from "../piece";

export class King extends Piece {
  constructor(team: Team) {
    super(team, { color: Color.ExcaliburBlue });
  }

  public highlightPossibleMove(): void {
    throw new Error("Method not implemented.");
  }
  public move(): void {
    throw new Error("Method not implemented.");
  }
}
