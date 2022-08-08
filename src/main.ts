import { Chess } from "./chess/engines/chess";
// import { City } from "./city/engines/city";

export const game = new Chess();
// export const game = new City();

await game.start();
game.goToScene("level");
