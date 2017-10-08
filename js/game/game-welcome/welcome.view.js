import AbstractView from '../abstract.view';
import templateLogo from '../includes/template-logo';

export default class WelcomeView extends AbstractView {
  get template() {
    return `
    <!-- Приветствие -->
      <section class="main main--welcome">
        ${templateLogo}
        <button class="js-show-next-screen main-play">Начать игру</button>
        <h2 class="title main-title">Правила игры</h2>
        <p class="text main-text">
          Правила просты&nbsp;— за&nbsp;2 минуты дать
          максимальное количество правильных ответов.<br>
          Удачи!
        </p>
      </section>
    `;
  }
  bind() {
    const output = this.element.querySelector(`.main`);
    output.addEventListener(`click`, (e) => {
      e.preventDefault();
      const target = e.target;

      if (target.closest(`.js-show-next-screen`)) {
        this.onAnswer();
      }
    });
  }
  onAnswer() {

  }
}
