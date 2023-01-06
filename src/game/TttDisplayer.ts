import { TttDisplayer } from "../types/TttDisplayer";
import Board from "./Board";


export class TttDefaultDisplayer implements TttDisplayer {
  public async toFiles(fileName: string) {

  }
  public async toBuffers() {
    return [ Buffer.from('') ]
  };
  public update( boards: Board<any>[]) {

  };
  public showWin(winnerName: string) {
    
  };
}