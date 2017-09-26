import templateBuilder from './helpers/template-builder';
import templateLogo from './includes/template-logo';
import handlerShowNextScreen from './handler-show-next-screen';

const templateScreen4 = (data, state) => {
  const template = `
  <!-- Результат игры -->
  <section class="main main--result">
    ${templateLogo}
    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали 4&nbsp;мелодии</div>
    <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="js-replay main-replay">Сыграть ещё раз</span>
  </section>
`;

  const templateScreen = templateBuilder(template);

  handlerShowNextScreen(data, state, templateScreen);

  return templateScreen;
};

export default templateScreen4;
