import data from '../../data/data-game';
import GameQuestionArtistView from './game-question-artist.view';
import GameQuestionGenreView from './game-question-genre.view';
import GameOverView from './game-over.view';
import screen from '../../helpers/screens';
import GameTimer from '../includes/template-time';
import App from '../app';

class GameController {

  init() {
    let view;

    switch (data.screen) {
      case screen.GAME_ARTIST:
        view = new GameQuestionArtistView(data.nextData);
        this.render(view);
        view.initPlayer();
        this.startTimer();
        break;
      case screen.GAME_GENRE:
        view = new GameQuestionGenreView(data.nextData);
        this.render(view);
        view.initPlayer();
        this.startTimer();
        break;
      case screen.GAME_RESULTS:
        const spentTime = data.initialState.time - data.time;
        const rightAnswers = data.level - (data.initialState.lives - data.lives);
        App.showStats({time: spentTime, answers: rightAnswers, test: `test`});
        this.stopTimer();
        data.restartGame();
        break;
      case screen.GAME_OVER:
        view = new GameOverView();
        this.render(view);
        this.stopTimer();
        data.restartGame();
        break;
    }
  }

  render(view) {
    view.templateToggle();
    view.onAnswer = (answer) => {
      if (answer) {
        const spentTime = data.time - GameTimer.time;
        data.time = GameTimer.time;
        data.checkAnswer(answer, spentTime);
      }
      this.init();
    };
  }

  startTimer() {
    if (!GameTimer.timer) {
      new GameTimer(data._state.time);
    }
  }

  stopTimer() {
    clearTimeout(GameTimer.timer);
    GameTimer.timer = null;
  }

}

export default new GameController();
