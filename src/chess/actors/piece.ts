import { Actor, ImageSource, Sprite } from "excalibur";
import { Team } from "../models/team";
import { Board } from "./board";

export abstract class Piece extends Actor {
  public team: Team;
  public currentPos: [number, number];

  public abstract highlightPossibleMove(): void;
  public abstract validateMove(pos: [number, number]): boolean;

  protected boardRef: Board;

  constructor(
    team: Team,
    initialPos: [number, number],
    boardRef: Board,
    image: ImageSource
  ) {
    super({ width: 45, height: 45 });
    this.team = team;

    this.graphics.use(
      new Sprite({
        image: image,
        destSize: { width: 45, height: 45 },
      })
    );

    this.boardRef = boardRef;
    this.currentPos = initialPos;

    this.validateCase(this.currentPos);
    this.boardRef.cases[this.currentPos[0]][this.currentPos[1]].piece = this;
  }

  onInitialize() {
    this.on("pointerdown", () => {
      this.highlightPossibleMove();
    });
  }

  public move(moveTo: [number, number]): void {}

  private validateCase(pos: [number, number]) {
    if (pos[0] < 0 || pos[1] < 0 || pos[0] >= 8 || pos[1] >= 8) {
      throw new Error("Invalid case position.");
    }
  }
}
