import { DevTool } from "@excaliburjs/dev-tools";
import { Chess } from "./chess/engines/chess";

const game = new Chess();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const devtool = new DevTool(game);

game.start().then(() => {
  game.goToScene("level");
});
