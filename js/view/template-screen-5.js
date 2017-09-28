import templateBuilder from '../helpers/template-builder';
import templateLogo from './includes/template-logo';
import handlerShowNextScreen from './handler-show-next-screen';

const templateScreen5 = () => {

  const template = `
  <!-- Неудачный результат игры -->
  <section class="main main--result">
    ${templateLogo}
    <h2 class="title">Вы проиграли</h2>
    <div class="main-stat">Ничего, вам повезет в следующий раз</div>
    <span role="button" tabindex="0" class="js-replay main-replay">Сыграть ещё раз</span>
  </section>
`;

  const templateScreen = templateBuilder(template);

  handlerShowNextScreen(templateScreen);

  return templateScreen;
};

export default templateScreen5;
