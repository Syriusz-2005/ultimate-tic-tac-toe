import { BoardStore } from "../types/BoardStore";
import Field from "./Field";
import Vec2 from "./Vec3";



export default class Board<F extends any> {
  private grid: BoardStore<Field<F>>;
  constructor(
    newItem: () => F,
  ) {
    const initialGrid = new Array(3).map( (y) => new Array(3).map( (x) => new Field(new Vec2(x, y), newItem()) ) ) as BoardStore<Field<F>>;
    this.grid = initialGrid;
  }

}