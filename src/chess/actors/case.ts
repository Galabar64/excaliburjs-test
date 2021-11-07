import { Actor, ActorArgs, Color, Rectangle } from "excalibur";
import { Board } from "./board";
import { Piece } from "./piece";

export class Case extends Actor {
  private _initialColor: Color;
  private _piece: Piece | undefined;
  private _boardRef: Board;

  public isHighlighted = false;
  public xPos: number;
  public yPos: number;

  public get piece(): Piece | undefined {
    return this._piece;
  }
  public set piece(value: Piece | undefined) {
    this._piece = value;

    if (this._piece) {
      this._piece.pos = this.pos;
    }
  }

  constructor(boardRef: Board, xPos: number, yPos: number, config?: ActorArgs) {
    super({ ...config, width: 45, height: 45 });
    this._boardRef = boardRef;
    this.xPos = xPos;
    this.yPos = yPos;
    this._initialColor = this.color;
  }

  onInitialize() {
    this.on("pointerdown", () => {
      if (!this.piece && !this.isHighlighted) {
        this._boardRef.resetTouched();
      }

      if (this.isHighlighted) {
        this._boardRef.movePiece(this);
      }
    });
  }

  public resetHighlight() {
    this.isHighlighted = false;
    this.graphics.use(
      new Rectangle({
        height: this.height,
        width: this.width,
        color: this._initialColor
      })
    );
  }

  public highlight() {
    this.isHighlighted = true;
    this.graphics.use(
      new Rectangle({
        height: this.height,
        width: this.width,
        color: Color.Magenta
      })
    );
  }
}
