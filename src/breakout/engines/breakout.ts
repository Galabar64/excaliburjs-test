import { Engine, Loader, DisplayMode, Color } from "excalibur";
import { LevelOne } from "../scenes/level-one/level-one";
import { Paddle } from "../actors/paddle";
import { Resources } from "../../resources";
import { Ball } from "../actors/ball";
import { Brick } from "../actors/brick";

export class Breakout extends Engine {
  private paddle = new Paddle();
  private ball = new Ball();
  private levelOne = new LevelOne();

  constructor() {
    super({ displayMode: DisplayMode.FitScreen });
  }

  public start() {
    this.levelOne.add(this.paddle);
    this.levelOne.add(this.ball);

    this.input.pointers.primary.on("move", (event) => {
      this.paddle.pos.x = event.worldPos.x;
    });

    this.buildBricks();

    this.add("levelOne", this.levelOne);

    // Automatically load all default resources
    const loader = new Loader(Object.values(Resources));

    return super.start(loader);
  }

  private buildBricks() {
    const padding = 20; // px
    const xoffset = 65; // x-offset
    const yoffset = 20; // y-offset
    const columns = 5;
    const rows = 3;

    const brickColor = [Color.Violet, Color.Orange, Color.Yellow];

    // Individual brick width with padding factored in
    const brickWidth = this.drawWidth / columns - padding - padding / columns; // px
    const brickHeight = 30; // px
    const bricks: Brick[] = [];
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < columns; i++) {
        bricks.push(
          new Brick({
            x: xoffset + i * (brickWidth + padding) + padding,
            y: yoffset + j * (brickHeight + padding) + padding,
            width: brickWidth,
            height: brickHeight,
            color: brickColor[j % brickColor.length]
          })
        );
      }
    }

    for (const brick of bricks) {
      this.levelOne.add(brick);
    }
  }
}
