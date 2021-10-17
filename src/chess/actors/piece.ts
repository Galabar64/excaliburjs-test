import { Actor, ImageSource } from "excalibur";
import { Team } from "../models/team";
import { Board } from "./board";

export abstract class Piece extends Actor {
  public team: Team;
  public casePos: [number, number];

  public abstract highlightPossibleMove(): void;
  public abstract validateMove(pos: [number, number]): boolean;

  private _boardRef: Board;

  constructor(
    team: Team,
    initialPos: [number, number],
    boardRef: Board,
    sprite: ImageSource
  ) {
    super();
    this.team = team;
    this.graphics.use(sprite.toSprite());

    this._boardRef = boardRef;
    this.casePos = initialPos;

    this.validateCase(this.casePos);
    this._boardRef.cases[this.casePos[0]][this.casePos[1]].piece = this;
  }

  public move(moveTo: [number, number]): void {}

  private validateCase(pos: [number, number]) {
    if (pos[0] < 0 || pos[1] < 0 || pos[0] >= 8 || pos[1] >= 8) {
      throw new Error("Invalid case position.");
    }
  }
}
