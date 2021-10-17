import { Actor, ActorArgs } from "excalibur";
import { Piece } from "./piece";

export class Case extends Actor {
  public piece?: Piece;

  constructor(config?: ActorArgs) {
    super({ ...config, width: 45, height: 45 });
  }
}
