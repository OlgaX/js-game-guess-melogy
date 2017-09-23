import templateBuilder from '../helpers/template-builder';
import templateToggle from '../helpers/template-toggle';
import templateScreen1 from './template-screen-1';


const template = `
  <!-- Неудачный результат игры -->
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы проиграли</h2>
    <div class="main-stat">Ничего, вам повезет в следующий раз</div>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>
`;

const templateScreen5 = templateBuilder(template);

document.addEventListener(`click`, (e) => {
  e.preventDefault();
  const target = e.target;
  if (target.closest(`.main-replay`)) {
    templateToggle(templateScreen1);
  }
});

export default templateScreen5;
