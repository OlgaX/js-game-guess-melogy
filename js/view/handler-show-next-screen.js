import gameController from '../controllers/game.controller';

const handlerShowNextScreen = (templateScreen) => {

  const output = templateScreen.querySelector(`.main`);
  output.addEventListener(`click`, (e) => {
    e.preventDefault();
    const target = e.target;

    if (target.closest(`.js-show-next-screen`)) {
      const answer = {};
      gameController(answer);
    } else if (target.closest(`.js-replay`)) {
      gameController();
    }
  });

};

export default handlerShowNextScreen;
