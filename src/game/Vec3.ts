export default class Vec2 {
  constructor(
    private readonly x: number,
    private readonly y: number,
  ) {}

  public get X(): number { return this.x; }
  public get Y(): number { return this.y; }

  public new(): Vec2 { return new Vec2(this.x, this.y); }
}
