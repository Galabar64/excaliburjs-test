import { Actor, ActorArgs, Color, Rectangle } from "excalibur";
import { Board } from "./board";
import { Piece } from "./piece";

export class Case extends Actor {
  private _initialColor: Color;
  private _piece?: Piece | undefined;
  private _boardRef: Board;

  public isHighlighted: boolean = false;

  public get piece(): Piece | undefined {
    return this._piece;
  }
  public set piece(value: Piece | undefined) {
    this._piece = value;

    if (this._piece) {
      this._piece.pos = this.pos;
    }
  }

  public resetHighlight() {
    this.isHighlighted = false;
    this.graphics.use(
      new Rectangle({
        height: this.height,
        width: this.width,
        color: this._initialColor,
      })
    );
  }

  public highlight() {
    this.isHighlighted = true;
    this.graphics.use(
      new Rectangle({
        height: this.height,
        width: this.width,
        color: Color.Magenta,
      })
    );
  }

  constructor(boardRef: Board, config?: ActorArgs) {
    super({ ...config, width: 45, height: 45 });
    this._boardRef = boardRef;
    this._initialColor = this.color;
  }

  onInitialize() {
    this.on("pointerdown", () => {
      if (!this.piece && !this.isHighlighted) {
        this._boardRef.resetHighlight();
      }
    });
  }
}
