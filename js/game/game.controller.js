import dataGame from '../data/data-game';
import GameQuestionArtistView from './game-question-artist.view';
import GameQuestionGenreView from './game-question-genre.view';
import GameResultsView from './game-results.view';
import GameOverView from './game-over.view';
import screen from '../helpers/screens';

const data = dataGame;

export default class GameController {
  constructor(answer) {
    this.answer = answer;
  }

  init() {
    data.updateState(this.answer);
    const nextScreenData = data.getNextScreenData();
    let view;

    switch (nextScreenData.screen) {
      case screen.GAME_ARTIST:
        view = new GameQuestionArtistView(nextScreenData.data);
        this.render(view);
        view.initPlayer();
        break;
      case screen.GAME_GENRE:
        view = new GameQuestionGenreView(nextScreenData.data);
        this.render(view);
        view.initPlayer();
        break;
      case screen.GAME_RESULTS:
        view = new GameResultsView(nextScreenData.data);
        this.render(view);
        data.startGame();
        break;
      case screen.GAME_OVER:
        view = new GameOverView(nextScreenData.data);
        this.render(view);
        data.startGame();
        break;
    }
  }

  render(view) {
    view.templateToggle();
    view.onAnswer = (answer) => {
      const game = new GameController(answer);
      game.init();
    };
  }
}
