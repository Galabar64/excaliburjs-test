import { ImageSource } from "excalibur";
import kingBlack from "./chess/images/black-pieces/king_black.png";
import queenBlack from "./chess/images/black-pieces/queen_black.png";
import rookBlack from "./chess/images/black-pieces/rook_black.png";
import bishopBlack from "./chess/images/black-pieces/bishop_black.png";
import knightBlack from "./chess/images/black-pieces/knight_black.png";
import pawnBlack from "./chess/images/black-pieces/pawn_black.png";

import kingWhite from "./chess/images/white-pieces/king_white.png";
import queenWhite from "./chess/images/white-pieces/queen_white.png";
import rookWhite from "./chess/images/white-pieces/rook_white.png";
import bishopWhite from "./chess/images/white-pieces/bishop_white.png";
import knightWhite from "./chess/images/white-pieces/knight_white.png";
import pawnWhite from "./chess/images/white-pieces/pawn_white.png";

/**
 * Default global resource dictionary. This gets loaded immediately
 * and holds available assets for the game.
 */
const Resources = {
  king_black: new ImageSource(kingBlack),
  queen_black: new ImageSource(queenBlack),
  rook_black: new ImageSource(rookBlack),
  bishop_black: new ImageSource(bishopBlack),
  knight_black: new ImageSource(knightBlack),
  pawn_black: new ImageSource(pawnBlack),

  king_white: new ImageSource(kingWhite),
  queen_white: new ImageSource(queenWhite),
  rook_white: new ImageSource(rookWhite),
  bishop_white: new ImageSource(bishopWhite),
  knight_white: new ImageSource(knightWhite),
  pawn_white: new ImageSource(pawnWhite),
};

export { Resources };
