import templateBuilder from '../helpers/template-builder';
import handlerShowNextScreen from './handler-show-next-screen';

const templateScreen2 = (data) => {
  const template = `
  <!-- Выбор исполнителя: уровень -->
  <section class="main main--level main--level-artist">
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

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
        ${data.variants.map((song) => `
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

  const templateScreen = templateBuilder(template);

  handlerShowNextScreen(templateScreen);

  return templateScreen;
};

export default templateScreen2;
