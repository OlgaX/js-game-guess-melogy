import templateToggle from './helpers/template-toggle';
import templateScreen1 from './template-screen-1';
import templateScreen2 from './template-screen-2';
import templateScreen3 from './template-screen-3';
import templateScreen4 from './template-screen-4';
import templateScreen5 from './template-screen-5';

const handlerShowNextScreen = (data, state, templateScreen) => {

  const chosenAnswerHandler = (e) => {
    e.preventDefault();
    const target = e.target;

    if (target.closest(`.js-show-next-screen`)) {

      const questionType = (data[state.curQuestion]) ? data[state.curQuestion].questionType : false;

      switch (questionType) {
        case `artist`:
          templateToggle(templateScreen2(data, state));

          const artistPlayer = document.querySelector(`.player-wrapper`);
          const artistFile = `./music/` + data[state.curQuestion].answer.src;

          window.initializePlayer(artistPlayer, artistFile, true);

          state.curQuestion++;

          break;
        case `genre`:
          templateToggle(templateScreen3(data, state));

          const genrePlayers = document.querySelectorAll(`.player-wrapper`);

          genrePlayers.forEach((genrePlayer, index) => {
            const genreFile = `./music/` + data[state.curQuestion].variants[index].src;
            return window.initializePlayer(genrePlayer, genreFile);
          });

          state.curQuestion++;
          break;
        default:
          const rand = Math.random();

          if (rand > 0.5) {
            templateToggle(templateScreen4(data, state));
          } else {
            templateToggle(templateScreen5(data, state));
          }

      }
    } else if (target.closest(`.js-replay`)) {
      templateToggle(templateScreen1());
    }
  };

  const output = templateScreen.querySelector(`.main`);
  output.addEventListener(`click`, chosenAnswerHandler);

};

export default handlerShowNextScreen;
