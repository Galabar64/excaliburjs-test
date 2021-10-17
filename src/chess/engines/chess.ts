import { Level } from "../scenes/level";
import { DisplayMode, Engine, Loader } from "excalibur";
import { Resources } from "../../resources";
import { Board } from "../actors/board";

export class Chess extends Engine {
  private level = new Level();
  private board = new Board();

  constructor() {
    super({ displayMode: DisplayMode.FitScreen });
  }

  public start() {
    this.level.add(this.board);
    for (const casesX of this.board.cases) {
        for (const caseY of casesX) {
            this.level.add(caseY);
      }
    }

    this.add("level", this.level);
    const loader = new Loader(Object.values(Resources));
    return super.start(loader);
  }
}
