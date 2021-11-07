import { Actor, ImageSource, Sprite } from "excalibur";
import { Team } from "../models/team";
import { Board } from "./board";
import { Case } from "./case";

export abstract class Piece extends Actor {
  public team: Team;
  public currentCase: Case;
  public touched = false;

  public abstract highlightPossibleMove(): void;

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
        destSize: { width: 45, height: 45 }
      })
    );

    this.boardRef = boardRef;

    this.validateInitialCase(initialPos);
    this.currentCase = this.boardRef.cases[initialPos[0]][initialPos[1]];
    this.currentCase.piece = this;
  }

  onInitialize() {
    this.on("pointerdown", () => {
      if (this.isKilled() || this.currentCase.isHighlighted) {
        return;
      }

      this.boardRef.resetTouched();
      this.touched = true;
      this.highlightPossibleMove();
    });
  }

  public move(moveToCase: Case): void {
    this.currentCase.piece = undefined;

    if (moveToCase.piece) {
      this.eatPiece(moveToCase.piece);
    }

    moveToCase.piece = this;
    this.currentCase = moveToCase;
    this.touched = false;
  }

  private eatPiece(piece: Piece) {
    piece.currentCase.piece = undefined;
    piece.kill();
  }

  private validateInitialCase(pos: [number, number]) {
    if (pos[0] < 0 || pos[1] < 0 || pos[0] >= 8 || pos[1] >= 8) {
      throw new Error("Invalid case position.");
    }

    const initialCase = this.boardRef.cases[pos[0]][pos[1]];
    if (initialCase.piece) {
      throw new Error(
        `Piece: ${this.team}-${this.constructor.name} can't be place at [${pos[0]}, ${pos[1]}] because of ${initialCase.piece.team}-${initialCase.piece.constructor.name}`
      );
    }
  }
}
