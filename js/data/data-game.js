import dataQuestionsGenerator from './data-questions-generator';
import templateNames from '../helpers/template-names';

const _generatedData = dataQuestionsGenerator();

const dataGame = {
  _state: {
    errors: 0,
    time: 120,
    score: 0,
    curQuestion: 0
  },

  _data: _generatedData,

  startGame() {
    this._data = dataQuestionsGenerator();
    this._state.curQuestion = 0;
  },

  updateState(answer) {
  },

  getNextScreenData() {
    const nextScreenData = {
      screen: false,
      data: false,
    };

    const isLeftQuestions = this._state.curQuestion < this._data.length;

    if (isLeftQuestions) {
      const data = this._data[this._state.curQuestion];
      nextScreenData.data = data;
      nextScreenData.screen = data.questionType;
      this._state.curQuestion++;
    } else {
      const rand = Math.random();

      if (rand > 0.5) {
        nextScreenData.screen = templateNames.RESULTS;
      } else {
        nextScreenData.screen = templateNames.END;
      }

    }
    return nextScreenData;
  }
};

export default dataGame;
