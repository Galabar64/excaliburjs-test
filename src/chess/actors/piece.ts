import { Actor, ImageSource, Sprite } from "excalibur";
import { Team } from "../models/team";
import { Board } from "./board";
import { Case } from "./case";

export abstract class Piece extends Actor {
  public team: Team;
  public currentCase: Case;
  public touched: boolean = false;

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

    this.validateCase(initialPos);
    this.currentCase = this.boardRef.cases[initialPos[0]][initialPos[1]];
    this.currentCase.piece = this;
  }

  onInitialize() {
    this.on("pointerdown", () => {
      this.touched = true;
      this.highlightPossibleMove();
    });
  }

  public move(moveToCase: Case): void {
    this.currentCase.piece = undefined;
    moveToCase.piece = this;
    this.currentCase = moveToCase;
  }

  private validateCase(pos: [number, number]) {
    if (pos[0] < 0 || pos[1] < 0 || pos[0] >= 8 || pos[1] >= 8) {
      throw new Error("Invalid case position.");
    }
  }
}
