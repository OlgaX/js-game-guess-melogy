import AbstractView from './abstract.view';
import templateLogo from './includes/template-logo';

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
        <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали 4&nbsp;мелодии</div>
        <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
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
}
