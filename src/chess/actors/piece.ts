import { Actor, ActorArgs } from "excalibur";
import { Team } from "../models/team";

export abstract class Piece extends Actor {
  public team: Team;
  
  public abstract highlightPossibleMove(): void;
  public abstract move(): void;

  constructor(team: Team, config?: ActorArgs) {
    super(config);
    this.team = team;
  }
}
