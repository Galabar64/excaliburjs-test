import { Actor, CollisionType, Color, Engine, Input, Vector } from "excalibur";

export class Player extends Actor {
  constructor(xPos: number, yPos: number) {
    super({
      width: 16,
      height: 16,
      color: Color.Blue,
      pos: new Vector(xPos, yPos),
      collisionType: CollisionType.Active
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onPostUpdate(_engine: Engine, _delta: number): void {
    this.vel.setTo(0, 0);
    const speed = 64;
    if (_engine.input.keyboard.isHeld(Input.Keys.Right)) {
      this.vel.x = speed;
    }
    if (_engine.input.keyboard.isHeld(Input.Keys.Left)) {
      this.vel.x = -speed;
    }
    if (_engine.input.keyboard.isHeld(Input.Keys.Up)) {
      this.vel.y = -speed;
    }
    if (_engine.input.keyboard.isHeld(Input.Keys.Down)) {
      this.vel.y = speed;
    }
  }
}
