import Vec2 from "./Vec3";


export default class Field<C> {
  private readonly value: C;

  constructor(
    private readonly pos: Vec2,
    value: C,
  ) {
    this.value = value;
  }

  public get Value() {return this.value};
}