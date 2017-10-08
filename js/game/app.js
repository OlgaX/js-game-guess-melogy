import welcomeController from './game-welcome/welcome.controller';
import gameController from './game-process/game.controller';
import GameResultsController from './game-results/game-results.controller';

const ControllerID = {
  WELCOME: ``,
  GAME: `game`,
  RESULTS: `results`
};

class App {

  constructor() {
    this.routes = {
      [ControllerID.WELCOME]: welcomeController,
      [ControllerID.GAME]: gameController,
    };

    window.onhashchange = () => {
      this.init();
    };
  }

  changeController(route = ``) {
    const Controller = this.routes[route];
    if (Controller) {
      Controller.init();
    }
  }

  showWelcome() {
    location.hash = ControllerID.WELCOME;
  }

  showGame() {
    location.hash = ControllerID.GAME;
  }

  showStats(data) {
    location.hash = ControllerID.RESULTS;
    const results = new GameResultsController(data);
    results.init();
  }

  init() {
    this.changeController(location.hash.slice(1));
  }

}

export default new App(); // singletone (object created only once)
