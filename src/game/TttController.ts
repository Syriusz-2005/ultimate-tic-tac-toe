import Board from "./Board";
import Field from "./Field";
import StatefullField from "./StatefullField";
import Vec2 from "./Vec3";

export class TttController {
  private readonly mainBoard = new Board<Board<StatefullField>>(
    () => new Board<StatefullField>(() => new StatefullField())
  );
}
