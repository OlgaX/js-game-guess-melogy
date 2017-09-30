import AbstractView from './abstract.view';

export default class GameQuestionArtistView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  get template() {
    return `
      <!-- Выбор исполнителя: уровень -->
      <section class="main main--level main--level-artist">
        <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
          <circle
            cx="390" cy="390" r="370"
            class="timer-line"
            style="filter: url(../view#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

            <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
            <span class="timer-value-mins">02</span><!--
            --><span class="timer-value-dots">:</span><!--
            --><span class="timer-value-secs">00</span>
            </div>
        </svg>

        <div class="main-wrap">
          <div class="main-timer"></div>

          <h2 class="title main-title">Кто исполняет эту песню?</h2>
          <div class="player-wrapper"></div>
          <form class="main-list">
            ${this.data.variants.map((song) => `
            <div class="js-show-next-screen main-answer-wrapper">
              <input class="main-answer-r" type="radio" id="answer-${song.id}" name="answer" value="val-${song.id}" />
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
      e.preventDefault();
      const target = e.target;

      if (target.closest(`.js-show-next-screen`)) {
        const answer = `answer artist`;
        this.onAnswer(answer);
      }
    });
  }

  onAnswer(answer) {
    return answer;
  }

  initPlayer() {
    const artistPlayer = document.querySelector(`.player-wrapper`);
    const artistFile = `./music/` + this.data.answer.src;
    window.initializePlayer(artistPlayer, artistFile, true);
  }
}
