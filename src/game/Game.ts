import { TttDisplayer } from "../types/TttDisplayer";
import { TttController } from "./TttController";



export default class TttUltimateGame {
  constructor(
    private readonly displayer: TttDisplayer,
    private readonly controller: TttController,
  ) {}
}