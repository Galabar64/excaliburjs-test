import { Actor, ActorArgs } from "excalibur";
import { Piece } from "./piece";

export class Case extends Actor {
  private _piece?: Piece | undefined;

  public get piece(): Piece | undefined {
    return this._piece;
  }
  public set piece(value: Piece | undefined) {
    this._piece = value;

    if (this._piece) {
      this._piece.pos = this.pos;
    }
  }

  constructor(config?: ActorArgs) {
    super({ ...config, width: 45, height: 45 });
  }
}
