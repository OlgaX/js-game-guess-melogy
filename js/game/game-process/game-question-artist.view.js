import AbstractView from '../abstract.view';

export default class GameQuestionArtistView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  get template() {
    return `
      <!-- Выбор исполнителя: уровень -->
      <section class="main main--level main--level-artist">
        <div class="main-timer"></div>
        <div class="main-wrap">

          <h2 class="title main-title">Кто исполняет эту песню?</h2>
          <div class="player-wrapper"></div>
          <form class="main-list">
            ${this.data.variants.map((song) => `
            <div class="js-show-next-screen main-answer-wrapper">
              <input class="main-answer-r" type="radio" id="answer-${song.id}" name="answer" value="${song.id}" />
              <label class="main-answer" for="answer-${song.id}">
              <img class="main-answer-preview" src="./music/${song.img}">
              ${song.artist}
              </label>
            </div>
            `).join(``)}
          </form>
        </div>
      </section>
    `;
  }

  bind() {
    const output = this.element.querySelector(`.main`);
    output.addEventListener(`click`, (e) => {
      const target = e.target.closest(`.js-show-next-screen`);

      if (target) {
        e.preventDefault();
        const answer = [+target.querySelector(`[type=radio]`).value];
        this.onAnswer(answer);
      }

    });
  }

  onAnswer(answer) {
    return answer;
  }

  initPlayer() {
    const artistPlayer = document.querySelector(`.player-wrapper`);
    const artistFile = `./music/` + this.data.src.src;
    window.initializePlayer(artistPlayer, artistFile, true);
  }
}
