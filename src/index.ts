import { Breakout } from "./breakout/engines/breakout";

const game = new Breakout();
game.start().then(() => {
  game.goToScene("levelOne");
});
