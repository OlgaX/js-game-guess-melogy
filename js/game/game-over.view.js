import AbstractView from './abstract.view';
import templateLogo from './includes/template-logo';

export default class GameOverView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  get template() {
    return `
      <!-- Неудачный результат игры -->
      <section class="main main--result">
        ${templateLogo}
        <h2 class="title">Вы проиграли</h2>
        <div class="main-stat">Ничего, вам повезет в следующий раз</div>
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
