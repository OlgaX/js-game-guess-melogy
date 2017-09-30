import welcome from './welcome.view';
import GameController from './game.controller';

export default class WelcomeController {
  constructor() {
    this.view = welcome;
  }

  init() {
    this.view.templateToggle();
    this.view.onAnswer = () => {
      const game = new GameController();
      game.init();
    };
  }
}
