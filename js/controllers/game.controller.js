import templateToggle from '../helpers/template-toggle';
import templateScreen1 from '../view/template-screen-1';
import templateScreen2 from '../view/template-screen-2';
import templateScreen3 from '../view/template-screen-3';
import templateScreen4 from '../view/template-screen-4';
import templateScreen5 from '../view/template-screen-5';
import templateNames from '../helpers/template-names';
import dataGame from '../data/data-game';

const gameController = (answer) => {

  if (answer) {
    dataGame.updateState(answer);
  } else {
    dataGame.startGame();
  }

  const nextScreenData = dataGame.getNextScreenData();

  switch (nextScreenData.screen) {
    case templateNames.ARTIST:
      templateToggle(templateScreen2(nextScreenData.data));

      const artistPlayer = document.querySelector(`.player-wrapper`);
      const artistFile = `./music/` + nextScreenData.data.answer.src;

      window.initializePlayer(artistPlayer, artistFile, true);

      break;
    case templateNames.GENRE:
      templateToggle(templateScreen3(nextScreenData.data));

      const genrePlayers = document.querySelectorAll(`.player-wrapper`);

      genrePlayers.forEach((genrePlayer, index) => {
        const genreFile = `./music/` + nextScreenData.data.variants[index].src;
        return window.initializePlayer(genrePlayer, genreFile);
      });

      break;
    case templateNames.RESULTS:
      templateToggle(templateScreen4());
      break;
    case templateNames.END:
      templateToggle(templateScreen5());
      break;
    default:
      templateToggle(templateScreen1());
  }
};

export default gameController;
