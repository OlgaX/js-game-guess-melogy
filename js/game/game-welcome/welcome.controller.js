import WelcomeView from './welcome.view';
import App from '../app';

class WelcomeController {
  constructor() {
    this.view = new WelcomeView();
  }

  init() {
    this.view.templateToggle();
    this.view.onAnswer = () => {
      App.showGame();
    };
  }
}

export default new WelcomeController();
