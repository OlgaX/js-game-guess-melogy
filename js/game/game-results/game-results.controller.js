import statistic from '../../data/statistic';
import GameResultsView from './game-results.view';
import App from '../app';

export default class GameResultsController {
  constructor(data) {
    const res = {
      statistic: this.getResults(data),
      time: data.time,
      rightAnswers: data.answers
    };

    this.view = new GameResultsView(res);
  }

  init() {
    this.view.templateToggle();
    this.view.onAnswer = () => {
      App.showGame();
    };
  }

  getResults(data) {
    const stat = statistic(data);
    return ((stat.totalPlaces - stat.place) / stat.totalPlaces * 100).toFixed() + `%`;
  }

}
