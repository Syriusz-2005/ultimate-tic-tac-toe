import Board from "../game/Board";


export type TttDisplayer = {
  toFiles(fileName: string): Promise<void>;
  toBuffers(): Promise<Buffer[]>;
  update( boards: Board<any>[] ): void;
  showWin(winnerName: string): void;
}