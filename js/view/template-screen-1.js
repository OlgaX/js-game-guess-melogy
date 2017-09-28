import templateBuilder from '../helpers/template-builder';
import templateLogo from './includes/template-logo';
import handlerShowNextScreen from './handler-show-next-screen';

const templateScreen1 = () => {
  const template = `
  <!-- Приветствие -->
  <section class="main main--welcome">
    ${templateLogo}
    <button class="js-show-next-screen main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;2 минуты дать
      максимальное количество правильных ответов.<br>
      Удачи!
    </p>
  </section>
`;

  const templateScreen = templateBuilder(template);

  handlerShowNextScreen(templateScreen);

  return templateScreen;
};

export default templateScreen1;
