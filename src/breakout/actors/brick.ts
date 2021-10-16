import { Actor, ActorArgs, CollisionType } from "excalibur";

export class Brick extends Actor {
  constructor(config?: ActorArgs) {
    super({ ...config, collisionType: CollisionType.Active });
  }
}
