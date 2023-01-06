import * as U from '../index';

const controller = new U.TttController();
const displayer = new U.TttDefaultDisplayer();

const game = new U.TttUltimateGame(displayer, controller);

console.log(game);