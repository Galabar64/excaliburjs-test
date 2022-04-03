import { Chess } from "./chess/engines/chess";

export const game = new Chess();

game.start().then(() => {
  game.goToScene("level");
});
