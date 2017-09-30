import AbstractView from './abstract.view';

export default class GameQuestionGenreView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  get template() {
    return `
      <!-- Игра на выбор жанра -->
      <section class="main main--level main--level-genre">
      <h2 class="title">Выберите ${this.data.answer[0].genre} треки</h2>
      <form class="genre">
        ${this.data.variants.map((song) => `
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
  }

  bind() {
    const output = this.element.querySelector(`.main`);
    output.addEventListener(`click`, (e) => {
      e.preventDefault();
      const target = e.target;

      if (target.closest(`.js-show-next-screen`)) {
        const answer = `answer genre`;
        this.onAnswer(answer);
      }
    });
  }

  onAnswer(answer) {
    return answer;
  }

  initPlayer() {
    const genrePlayers = document.querySelectorAll(`.player-wrapper`);
    genrePlayers.forEach((genrePlayer, index) => {
      const genreFile = `./music/` + this.data.variants[index].src;
      return window.initializePlayer(genrePlayer, genreFile);
    });
  }
}
