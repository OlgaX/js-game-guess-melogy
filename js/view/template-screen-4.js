import templateBuilder from '../helpers/template-builder';
import templateToggle from '../helpers/template-toggle';
import templateScreen1 from './template-screen-1';

const template = `
  <!-- Результат игры -->
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали 4&nbsp;мелодии</div>
    <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>
`;

const templateScreen4 = templateBuilder(template);

document.addEventListener(`click`, (e) => {
  e.preventDefault();
  const target = e.target;
  if (target.closest(`.main-replay`)) {
    templateToggle(templateScreen1);
  }
});

export default templateScreen4;
