import { PlayerIndex } from "../types/PlayerIndex";


export default class StatefullField {
  private occupiedBy: undefined | PlayerIndex;

  public get OccupiedBy() {return this.occupiedBy};
  public setOccupancy(value: PlayerIndex) {this.occupiedBy = value}
}