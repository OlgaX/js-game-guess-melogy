import AbstractView from '../abstract.view';
import templateLogo from '../includes/template-logo';

export default class GameResultsView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  get template() {
    return `
      <!-- Результат игры -->
      <section class="main main--result">
        ${templateLogo}
        <h2 class="title">Вы настоящий меломан!</h2>
        <div class="main-stat">За&nbsp;${this.formatTime(this.data.time)}<br>
        вы&nbsp;отгадали ${this.formatRightAnswers(this.data.rightAnswers)}</div>
        <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${this.data.statistic}&nbsp;игроков</span>
        <span role="button" tabindex="0" class="js-replay main-replay">Сыграть ещё раз</span>
      </section>
    `;
  }

  bind() {
    const output = this.element.querySelector(`.main`);
    output.addEventListener(`click`, (e) => {
      e.preventDefault();
      const target = e.target;

      if (target.closest(`.js-replay`)) {
        this.onAnswer();
      }
    });
  }

  onAnswer() {

  }

  formatTime(time) {
    const secNum = parseInt(time, 10);
    let hours = Math.floor(secNum / 3600);
    let minutes = Math.floor((secNum - (hours * 3600)) / 60);
    let seconds = secNum - (hours * 3600) - (minutes * 60);

    if (minutes > 4) {
      minutes += `&nbsp;минут`;
    } else if (minutes > 1) {
      minutes += `&nbsp;минуты`;
    } else if (minutes === 1) {
      minutes += `&nbsp;минуту`;
    } else {
      minutes = ``;
    }

    if (seconds > 4) {
      seconds += `&nbsp;секунд`;
    } else if (seconds > 1) {
      seconds += `&nbsp;секунды`;
    } else if (seconds === 1) {
      seconds += `&nbsp;секунду`;
    } else {
      seconds = ``;
    }

    return minutes + ` ` + seconds;
  }

  formatRightAnswers(answers) {
    if (answers > 4 || answers === 0) {
      answers += `&nbsp;мелодий`;
    } else if (answers > 1) {
      answers += `&nbsp;мелодии`;
    } else if (answers === 1) {
      answers += `&nbsp;мелодию`;
    }

    return answers;
  }
}
