import dataQuestionsGenerator from './data-questions-generator';
import screen from '../helpers/screens';

const INITIAL_STATE = {
  lives: 3,
  time: 120,
  score: 0,
  level: 0,
};

const dataGame = {
  _state: Object.assign({}, INITIAL_STATE),
  _data: dataQuestionsGenerator(),

  initState() {
    this._state = Object.assign({}, INITIAL_STATE);
  },

  generateData() {
    this._data = dataQuestionsGenerator();
  },

  restartGame() {
    this.initState();
    this.generateData();
  },

  checkAnswer(receivedAnswer, spentTime) {
    if (!receivedAnswer) {
      return false;
    }

    const trueAnswer = this.levelData.answer;
    this.nextLevel();

    if (receivedAnswer.length !== trueAnswer.length) {
      return this.takeLive();
    }

    const concatAnswers = [...receivedAnswer, ...trueAnswer];
    let check = Array.from(new Set(concatAnswers));

    if (check.length > trueAnswer.length) {
      return this.takeLive();
    }

    if (spentTime < 10) {
      this.score = 2;
    } else {
      this.score = 1;
    }

    return trueAnswer;
  },

  takeLive() {
    return (this._state.lives > 0) ? --this._state.lives : false;
  },

  nextLevel() {
    this._state.level++;
  },

  get initialState() {
    return Object.assign({}, INITIAL_STATE);
  },

  get lives() {
    return this._state.lives;
  },

  get level() {
    return this._state.level;
  },

  set score(num) {
    this._state.score += num;
  },

  get score() {
    return this._state.score;
  },

  set time(time) {
    this._state.time = time;
  },

  get time() {
    return this._state.time;
  },

  get data() {
    return this._data;
  },

  get levelData() {
    return this.data[this.level];
  },

  get nextData() {
    const data = this.levelData;

    if (data && this.level > data.length) {
      return false;
    }

    return data;
  },

  get screen() {
    if (!this.lives || !this.time) {
      return screen.GAME_OVER;
    } else if (!this.nextData) {
      return screen.GAME_RESULTS;
    }
    return this.levelData.questionType;
  }

};

export default dataGame;
