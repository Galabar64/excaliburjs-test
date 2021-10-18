import { Actor, CollisionType, Color, vec } from "excalibur";

export class Paddle extends Actor {
  constructor() {
    super({
      width: 200,
      height: 20,
      color: Color.Chartreuse,
      collisionType: CollisionType.Fixed
    });
  }

  onInitialize() {
    this.pos = vec(150, this.scene.engine.drawHeight - 40);
  }
}
