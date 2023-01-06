import Field from "../game/Field";


export type BoardStore<F extends Field<any>> = [
  [F, F, F],
  [F, F, F],
  [F, F, F],
];