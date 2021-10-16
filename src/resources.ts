import { ImageSource } from "excalibur";
import sword from "./breakout/images/sword.png";

/**
 * Default global resource dictionary. This gets loaded immediately
 * and holds available assets for the game.
 */
const Resources = {
  Sword: new ImageSource(sword),
};

export { Resources };
