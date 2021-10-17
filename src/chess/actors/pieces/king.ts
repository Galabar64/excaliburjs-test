import { Color } from "excalibur";
import { Piece } from "../piece";

export class King extends Piece {
  constructor() {
    super({ color: Color.ExcaliburBlue });
  }

  public highlightPossibleMove(): void {
    throw new Error("Method not implemented.");
  }
  public move(): void {
    throw new Error("Method not implemented.");
  }
}
