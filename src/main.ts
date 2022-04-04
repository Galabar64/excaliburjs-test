import { Platform } from "./city/engines/city";

export const game = new Platform();

game.start().then(() => {
  game.goToScene("level");
});
