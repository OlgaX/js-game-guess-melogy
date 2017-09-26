import templateBuilder from '../helpers/template-builder';

const templateAnswerGenre = (song) => {

  const template = `
      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-${song.id}" id="a-${song.id}">
        <label class="genre-answer-check" for="a-${song.id}"></label>
      </div>
  `;

  return templateBuilder(template);
};

export default templateAnswerGenre;
