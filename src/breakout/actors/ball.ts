import { Actor, CollisionType, Color, Timer, vec } from "excalibur";
import { Brick } from "./brick";

export class Ball extends Actor {
  constructor() {
    super({
      x: 100,
      y: 300,
      radius: 10,
      color: Color.Red,
      collisionType: CollisionType.Passive,
    });
  }

  onInitialize() {
    setTimeout(() => {
      this.vel = vec(100, 100);
    }, 1000);

    this.on("precollision", (event) => {
      if (event.other instanceof Brick) {
        event.other.kill();
      }

      // reverse course after any collision
      // intersections are the direction body A has to move to not be clipping body B
      // `ev.intersection` is a vector `normalize()` will make the length of it 1
      // `negate()` flips the direction of the vector
      var intersection = event.intersection.normalize();

      // The largest component of intersection is our axis to flip
      if (Math.abs(intersection.x) > Math.abs(intersection.y)) {
        this.vel.x *= -1;
      } else {
        this.vel.y *= -1;
      }
    });

    this.on("exitviewport", () => {
      alert("You lose!");
    });
  }

  onPostUpdate() {
    // If the ball collides with the left side
    // of the screen reverse the x velocity
    if (this.pos.x < this.width / 2) {
      this.vel.x *= -1;
    }

    // If the this collides with the right side
    // of the screen reverse the x velocity
    if (this.pos.x + this.width / 2 > this.scene.engine.drawWidth) {
      this.vel.x *= -1;
    }

    // If the this collides with the top
    // of the screen reverse the y velocity
    if (this.pos.y < this.height / 2) {
      this.vel.y *= -1;
    }
  }
}
