import { Chess } from "./chess/engines/chess";

const game = new Chess();
game.start().then(() => {
  game.goToScene("level");
});
