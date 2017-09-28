import templateBuilder from '../helpers/template-builder';
import handlerShowNextScreen from './handler-show-next-screen';

const templateScreen3 = (data) => {

  const template = `
  <!-- Игра на выбор жанра -->
  <section class="main main--level main--level-genre">
    <h2 class="title">Выберите ${data.answer[0].genre} треки</h2>
    <form class="genre">
        ${data.variants.map((song) => `
        <div class="genre-answer">
          <div class="player-wrapper"></div>
          <input type="checkbox" name="answer" value="answer-${song.id}" id="a-${song.id}">
          <label class="genre-answer-check" for="a-${song.id}"></label>
        </div>
      `).join(``)}
      <button class="js-show-next-screen genre-answer-send" type="submit">Ответить</button>
    </form>
  </section>
`;

  const templateScreen = templateBuilder(template);

  handlerShowNextScreen(templateScreen);

  return templateScreen;
};

export default templateScreen3;
