import { Actor } from "excalibur";

export abstract class Piece extends Actor {
  public abstract highlightPossibleMove(): void;
  public abstract move(): void;
}
