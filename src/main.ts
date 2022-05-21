import { Chess } from "./chess/engines/chess";
// import { City } from "./city/engines/city";

export const game = new Chess();

game.start().then(() => {
  game.goToScene("level");
});
