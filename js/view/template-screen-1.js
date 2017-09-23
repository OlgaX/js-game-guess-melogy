import templateBuilder from '../helpers/template-builder';
import templateToggle from '../helpers/template-toggle';
import templateScreen2 from './template-screen-2';

const template = `
  <!-- Приветствие -->
  <section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;2 минуты дать
      максимальное количество правильных ответов.<br>
      Удачи!
    </p>
  </section>
`;

const templateScreen1 = templateBuilder(template);

document.addEventListener(`click`, (e) => {
  e.preventDefault();
  const target = e.target;

  if (target.closest(`.main-play`)) {
    templateToggle(templateScreen2);
  }
});

export default templateScreen1;
