import templateBuilder from '../helpers/template-builder';
import templateToggle from '../helpers/template-toggle';
import templateScreen4 from './template-screen-4';
import templateScreen5 from './template-screen-5';

const template = `
  <!-- Игра на выбор жанра -->
  <section class="main main--level main--level-genre">
    <h2 class="title">Выберите инди-рок треки</h2>
    <form class="genre">
      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-1">
        <label class="genre-answer-check" for="a-1"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-2">
        <label class="genre-answer-check" for="a-2"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-3">
        <label class="genre-answer-check" for="a-3"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-4">
        <label class="genre-answer-check" for="a-4"></label>
      </div>

      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </section>
`;

const templateScreen3 = templateBuilder(template);

document.addEventListener(`click`, (e) => {
  e.preventDefault();
  const target = e.target;

  if (target.closest(`.genre-answer-send`)) {
    const rand = Math.random();
    if (rand > 0.5) {
      templateToggle(templateScreen4);
    } else {
      templateToggle(templateScreen5);
    }
  }
});

export default templateScreen3;
